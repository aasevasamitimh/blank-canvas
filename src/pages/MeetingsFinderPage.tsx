import { useState, useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Search, MapPin, Clock, Phone } from 'lucide-react';

interface Meeting {
  ID: string;
  DistrictEnglish: string;
  DistrictMarathi: string;
  TalukaEnglish: string;
  TalukaMarathi: string;
  MeetingNameEnglish: string;
  MeetingNameMarathi: string;
  MeetingAddressEnglish: string;
  MeetingAddressMarathi: string;
  MeetingTimeEnglish: string;
  MeetingTimeMarathi: string;
  MeetingContactEnglish: string;
  MeetingContactMarathi: string;
  isActive: string;
}

const MeetingsFinderPage = () => {
  const { t, language } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState<string>('');
  const [meetings, setMeetings] = useState<Meeting[]>([]);
  const [filteredMeetings, setFilteredMeetings] = useState<Meeting[]>([]);

  const districts = [
    { english: 'Beed', marathi: 'बीड' },
    { english: 'Hingoli', marathi: 'हिंगोली' },
    { english: 'Latur', marathi: 'लातूर' },
    { english: 'Nanded', marathi: 'नांदेड' },
    { english: 'Osmanabad', marathi: 'उस्मानाबाद' },
    { english: 'Parbhani', marathi: 'परभणी' }
  ];

  useEffect(() => {
    // TODO: Load CSV data here
    // For now, using sample data
    const sampleMeetings: Meeting[] = [
      {
        ID: '1',
        DistrictEnglish: 'Latur',
        DistrictMarathi: 'लातूर',
        TalukaEnglish: 'Latur',
        TalukaMarathi: 'लातूर',
        MeetingNameEnglish: 'Latur Monday Meeting',
        MeetingNameMarathi: 'लातूर सोमवार मीटिंग',
        MeetingAddressEnglish: 'Shivaji Nagar, Latur',
        MeetingAddressMarathi: 'शिवाजी नगर, लातूर',
        MeetingTimeEnglish: 'Monday 7:00 PM',
        MeetingTimeMarathi: 'सोमवार संध्याकाळी ७:०० वाजता',
        MeetingContactEnglish: '9420094243',
        MeetingContactMarathi: '९४२००९४२४३',
        isActive: 'Yes'
      },
      // Add more sample meetings as needed
    ];
    setMeetings(sampleMeetings);
    setFilteredMeetings(sampleMeetings);
  }, []);

  useEffect(() => {
    let filtered = meetings.filter(m => m.isActive === 'Yes');

    if (selectedDistrict) {
      filtered = filtered.filter(m => 
        m.DistrictEnglish === selectedDistrict
      );
    }

    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(m =>
        m.DistrictEnglish.toLowerCase().includes(term) ||
        m.DistrictMarathi.includes(term) ||
        m.TalukaEnglish.toLowerCase().includes(term) ||
        m.TalukaMarathi.includes(term) ||
        m.MeetingNameEnglish.toLowerCase().includes(term) ||
        m.MeetingNameMarathi.includes(term)
      );
    }

    setFilteredMeetings(filtered);
  }, [searchTerm, selectedDistrict, meetings]);

  return (
    <Layout
      title={t({ english: 'Find Meetings in Maharashtra', marathi: 'महाराष्ट्रातील मिटींग्ज शोधा' })}
      description={t({
        english: 'Find Alcoholics Anonymous meetings in Maharashtra districts',
        marathi: 'महाराष्ट्राच्या जिल्ह्यांमध्ये अल्कोहोलिक्स ॲनॉनिमस मिटींग्ज शोधा'
      })}
    >
      <section className="aa-section">
        <div className="aa-container">
          <div className="max-w-6xl mx-auto space-y-8">
            {/* Header */}
            <div className="text-center space-y-4">
              <h1 className="text-3xl md:text-4xl font-bold text-aa-navy">
                {t({
                  english: 'Find Meetings in Maharashtra',
                  marathi: 'महाराष्ट्रातील मिटींग्ज शोधा'
                })}
              </h1>
              <p className="text-lg text-muted-foreground">
                {t({
                  english: 'Search by district, taluka, or meeting name',
                  marathi: 'जिल्हा, तालुका किंवा मीटिंगच्या नावाने शोधा'
                })}
              </p>
            </div>

            {/* Search */}
            <div className="flex items-center space-x-2 max-w-2xl mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder={t({
                    english: 'Search by district, taluka, or meeting name...',
                    marathi: 'जिल्हा, तालुका किंवा मीटिंगच्या नावाने शोधा...'
                  })}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-input focus:border-aa-teal focus:ring-2 focus:ring-aa-teal/20 outline-none"
                />
              </div>
            </div>

            {/* Districts Grid */}
            <div>
              <h2 className="text-2xl font-bold text-aa-navy mb-6 text-center">
                {t({
                  english: 'Select District',
                  marathi: 'जिल्हा निवडा'
                })}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {districts.map((district) => (
                  <Button
                    key={district.english}
                    size="lg"
                    variant={selectedDistrict === district.english ? 'default' : 'outline'}
                    onClick={() => setSelectedDistrict(
                      selectedDistrict === district.english ? '' : district.english
                    )}
                    className="h-auto py-4"
                  >
                    {language === 'english' ? district.english : district.marathi}
                  </Button>
                ))}
              </div>
            </div>

            {/* Results */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-aa-navy">
                  {t({
                    english: 'Meetings',
                    marathi: 'मिटींग्ज'
                  })}
                </h2>
                <span className="text-muted-foreground">
                  {filteredMeetings.length} {t({ english: 'found', marathi: 'आढळल्या' })}
                </span>
              </div>

              {filteredMeetings.length === 0 ? (
                <div className="text-center py-12 text-muted-foreground">
                  <p>
                    {t({
                      english: 'No meetings found. Please add the CSV file with meeting data.',
                      marathi: 'कोणतीही मीटिंग आढळली नाही. कृपया मीटिंग डेटासह CSV फाइल जोडा.'
                    })}
                  </p>
                </div>
              ) : (
                <div className="grid gap-6">
                  {filteredMeetings.map((meeting) => (
                    <div key={meeting.ID} className="aa-card space-y-4">
                      <div className="flex items-start justify-between">
                        <div className="space-y-2 flex-1">
                          <h3 className="text-xl font-bold text-aa-navy">
                            {language === 'english' ? meeting.MeetingNameEnglish : meeting.MeetingNameMarathi}
                          </h3>
                          <div className="flex items-center space-x-2 text-muted-foreground">
                            <MapPin className="h-4 w-4" />
                            <span className="text-sm">
                              {language === 'english' 
                                ? `${meeting.TalukaEnglish}, ${meeting.DistrictEnglish}`
                                : `${meeting.TalukaMarathi}, ${meeting.DistrictMarathi}`
                              }
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-3 text-sm">
                        <div className="flex items-start space-x-3">
                          <MapPin className="h-5 w-5 text-aa-teal flex-shrink-0 mt-0.5" />
                          <p>
                            {language === 'english' ? meeting.MeetingAddressEnglish : meeting.MeetingAddressMarathi}
                          </p>
                        </div>
                        
                        <div className="flex items-center space-x-3">
                          <Clock className="h-5 w-5 text-aa-orange flex-shrink-0" />
                          <p>
                            {language === 'english' ? meeting.MeetingTimeEnglish : meeting.MeetingTimeMarathi}
                          </p>
                        </div>
                        
                        {meeting.MeetingContactEnglish && (
                          <div className="flex items-center space-x-3">
                            <Phone className="h-5 w-5 text-aa-navy flex-shrink-0" />
                            <a 
                              href={`tel:${meeting.MeetingContactEnglish}`}
                              className="text-aa-navy hover:underline font-medium"
                            >
                              {language === 'english' ? meeting.MeetingContactEnglish : meeting.MeetingContactMarathi}
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MeetingsFinderPage;
