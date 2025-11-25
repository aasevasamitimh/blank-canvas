import { useState, useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Papa from 'papaparse';

interface Meeting {
  ID: string;
  DistrictEnglish: string;
  DistrictMarathi: string;
  TalukaEnglish: string;
  TalukaMarathi: string;
  MeetingNameEnglish: string;
  MeetingNameMarathi: string;
  isActive: string;
}

interface MeetingStats {
  district: { english: string; marathi: string };
  talukas: { [key: string]: { english: string; marathi: string; count: number } };
  total: number;
}

const MeetingsListPage = () => {
  const { t, language } = useLanguage();
  const [expandedDistrict, setExpandedDistrict] = useState<string | null>(null);
  const [stats, setStats] = useState<MeetingStats[]>([]);

  useEffect(() => {
    fetch('/data/aameetingsinmaharashtra.csv')
      .then(response => response.text())
      .then(csvText => {
        Papa.parse<Meeting>(csvText, {
          header: true,
          skipEmptyLines: true,
          complete: (results) => {
            const activeMeetings = results.data.filter(m => 
              m.isActive === 'Yes' && m.MeetingNameEnglish && m.MeetingNameEnglish.trim() !== ''
            );
            
            // Group by district
            const districtMap = new Map<string, MeetingStats>();
            
            activeMeetings.forEach(meeting => {
              const districtKey = meeting.DistrictEnglish;
              
              if (!districtMap.has(districtKey)) {
                districtMap.set(districtKey, {
                  district: {
                    english: meeting.DistrictEnglish,
                    marathi: meeting.DistrictMarathi
                  },
                  talukas: {},
                  total: 0
                });
              }
              
              const districtStats = districtMap.get(districtKey)!;
              districtStats.total++;
              
              const talukaKey = meeting.TalukaEnglish;
              if (!districtStats.talukas[talukaKey]) {
                districtStats.talukas[talukaKey] = {
                  english: meeting.TalukaEnglish,
                  marathi: meeting.TalukaMarathi,
                  count: 0
                };
              }
              districtStats.talukas[talukaKey].count++;
            });
            
            const sortedStats = Array.from(districtMap.values()).sort((a, b) =>
              a.district.english.localeCompare(b.district.english)
            );
            
            setStats(sortedStats);
          }
        });
      })
      .catch(error => console.error('Error loading CSV:', error));
  }, []);

  const toggleDistrict = (district: string) => {
    setExpandedDistrict(expandedDistrict === district ? null : district);
  };

  return (
    <Layout
      title={t({ english: 'Meetings List', marathi: 'मीटिंग्ज यादी' })}
      description={t({
        english: 'Complete list of AA meetings in Maharashtra by district and taluka',
        marathi: 'जिल्हा आणि तालुक्यानुसार महाराष्ट्रातील ए.ए. मीटिंग्जची संपूर्ण यादी'
      })}
    >
      <section className="aa-section">
        <div className="aa-container">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Header */}
            <div className="text-center space-y-4">
              <h1 className="text-3xl md:text-4xl font-bold text-aa-navy">
                {t({
                  english: 'List of All Meetings',
                  marathi: 'सर्व मीटिंग्जची यादी'
                })}
              </h1>
              <p className="text-lg text-muted-foreground">
                {t({
                  english: 'Organized by district and taluka',
                  marathi: 'जिल्हा आणि तालुक्यानुसार सुव्यवस्थित'
                })}
              </p>
            </div>

            {/* Stats Table */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-aa-navy text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">
                        {t({ english: 'District', marathi: 'जिल्हा' })}
                      </th>
                      <th className="px-6 py-4 text-right font-semibold">
                        {t({ english: 'Meetings', marathi: 'मीटिंग्ज' })}
                      </th>
                      <th className="px-6 py-4 text-center font-semibold w-12"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {stats.length === 0 ? (
                      <tr>
                        <td colSpan={3} className="px-6 py-12 text-center text-muted-foreground">
                          {t({
                            english: 'No meeting data available. Please add the CSV file.',
                            marathi: 'मीटिंग डेटा उपलब्ध नाही. कृपया CSV फाइल जोडा.'
                          })}
                        </td>
                      </tr>
                    ) : (
                      stats.map((stat) => (
                        <>
                          <tr 
                            key={stat.district.english}
                            className="hover:bg-muted/50 cursor-pointer transition-colors"
                            onClick={() => toggleDistrict(stat.district.english)}
                          >
                            <td className="px-6 py-4 font-medium text-aa-navy">
                              {language === 'english' ? stat.district.english : stat.district.marathi}
                            </td>
                            <td className="px-6 py-4 text-right">
                              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-aa-teal/10 text-aa-teal font-semibold">
                                {stat.total}
                              </span>
                            </td>
                            <td className="px-6 py-4 text-center">
                              {expandedDistrict === stat.district.english ? (
                                <ChevronUp className="h-5 w-5 text-muted-foreground inline" />
                              ) : (
                                <ChevronDown className="h-5 w-5 text-muted-foreground inline" />
                              )}
                            </td>
                          </tr>
                          {expandedDistrict === stat.district.english && (
                            <tr>
                              <td colSpan={3} className="px-6 py-4 bg-muted/30">
                                <div className="space-y-2">
                                  <h4 className="font-semibold text-aa-navy mb-3">
                                    {t({ english: 'Talukas:', marathi: 'तालुके:' })}
                                  </h4>
                                   <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                    {Object.entries(stat.talukas).map(([talukaKey, talukaData]) => (
                                      <div
                                        key={talukaKey}
                                        className="flex items-center justify-between bg-white rounded-lg px-4 py-3 shadow-sm"
                                      >
                                        <span className="text-sm font-medium">
                                          {language === 'english' ? talukaData.english : talukaData.marathi}
                                        </span>
                                        <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-aa-orange/10 text-aa-orange text-sm font-semibold">
                                          {talukaData.count}
                                        </span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </td>
                            </tr>
                          )}
                        </>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Note */}
            <div className="aa-card bg-aa-mint/20 border-aa-teal">
              <p className="text-sm text-foreground">
                <strong>{t({ english: 'Note:', marathi: 'टीप:' })}</strong>{' '}
                {t({
                  english: 'Click on any district to see the breakdown by taluka. Districts or talukas with zero meetings will show 0.',
                  marathi: 'तालुक्यानुसार विभाजन पाहण्यासाठी कोणत्याही जिल्ह्यावर क्लिक करा. शून्य मीटिंग असलेले जिल्हे किंवा तालुके ० दाखवतील.'
                })}
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MeetingsListPage;
