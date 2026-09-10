import React, { useState } from 'react';
import { MapPin, Mail, Clock, Send, CheckCircle2, MessageSquare, Navigation, ChevronDown, PhoneCall, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const ContactLocationSection: React.FC = () => {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    category: 'Granit & Marmer',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && (formData.phone || formData.email)) {
      setSubmitted(true);
    }
  };

  const categories = [
    'Granit & Marmer',
    'Sanitari & Fittings',
    'Wall Panel Arsitektural',
    'Keramik & Glazed Tile',
    'Proyek Rumah Residensial',
    'Proyek Komersial Gedung',
  ];

  return (
    <section id="kontak" className="w-full bg-[#111111] text-white py-16 sm:py-20 relative overflow-hidden border-t border-gray-800">
      {/* Subtle Grid Accent Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            {t('contact', 'sectionTitle')}<span className="text-red-500">{t('contact', 'sectionTitleHighlight')}</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base mt-4 leading-relaxed font-normal">
            {t('contact', 'sectionDesc')}
          </p>
        </div>

        {/* Main Grid: 2 Columns (Left: Location & Contact Cards, Right: Interactive Form) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* LEFT COLUMN: Location & Contact Info */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            
            {/* Main Location Card */}
            <div className="bg-[#1A1A1A] border border-gray-800 rounded-sm p-6 sm:p-8 hover:border-gray-700 transition-colors shadow-xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-red-600/10 text-red-500 border border-red-500/20 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <span className="text-xs uppercase font-bold text-red-500 tracking-wider">{t('contact', 'showroomTitle')}</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">Jaya Bersama Interior IBCC</h3>
                  <p className="text-gray-300 text-sm sm:text-base font-medium leading-relaxed mt-2">
                    JL AHMAD YANI RUKO IBCC BLOK D3-6, Bandung, Jawa Barat
                  </p>
                  
                  <div className="mt-5 pt-4 border-t border-gray-800/80 flex flex-wrap items-center gap-3">
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=-6.915228189935767,107.6338078352852"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white text-xs font-bold uppercase tracking-wider rounded-sm transition-all shadow-md active:scale-95 group"
                    >
                      <Navigation className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                      {t('contact', 'ctaDirections')}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact & Direct Action Buttons Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Telepon & WhatsApp Official with Direct Button */}
              <div className="bg-[#1A1A1A] border border-gray-800 rounded-sm p-5 hover:border-gray-700 transition-colors flex flex-col justify-between">
                <div>
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-3">
                    <PhoneCall className="w-4 h-4" />
                  </div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">{t('contact', 'phoneWA')}</h4>
                  <p className="text-white text-sm font-bold mt-1">+62 882-0010-78009</p>
                </div>
                
                {/* DIRECT WHATSAPP BUTTON */}
                <a
                  href="https://wa.me/62882001078009?text=Halo%20Jaya%20Bersama%20Interior,%20saya%20ingin%20konsultasi%20mengenai%20produk%20interior%20dan%20proyek."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider rounded-sm transition-all shadow-md active:scale-95 group"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                  </svg>
                  <span>{t('contact', 'ctaWA')}</span>
                </a>
              </div>

              {/* Email Official with Direct Button */}
              <div className="bg-[#1A1A1A] border border-gray-800 rounded-sm p-5 hover:border-gray-700 transition-colors flex flex-col justify-between">
                <div>
                  <div className="w-9 h-9 rounded-lg bg-red-500/10 text-red-500 flex items-center justify-center mb-3">
                    <Mail className="w-4 h-4" />
                  </div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">{t('contact', 'email')}</h4>
                  <p className="text-white text-xs sm:text-sm font-semibold mt-1 truncate">jayabersamainterior@gmail.com</p>
                </div>

                {/* DIRECT EMAIL BUTTON */}
                <a
                  href="mailto:jayabersamainterior@gmail.com?subject=Konsultasi%20Proyek%20Jaya%20Bersama%20Interior"
                  className="mt-4 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider rounded-sm transition-all border border-gray-700 active:scale-95 group"
                >
                  <Mail className="w-4 h-4 text-red-400" />
                  <span>{t('contact', 'ctaEmail')}</span>
                </a>
              </div>

              {/* Social Media Links & Hours */}
              <div className="bg-[#1A1A1A] border border-gray-800 rounded-sm p-5 hover:border-gray-700 transition-colors sm:col-span-2">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">{t('contact', 'social')}</h4>
                    <div className="flex items-center gap-4 mt-2">
                      <a
                        href="https://www.instagram.com/jayabersamainterior"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-pink-400 text-xs sm:text-sm font-semibold flex items-center gap-1.5 transition-colors"
                      >
                        <svg className="w-4 h-4 text-pink-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                        <span>@jayabersamainterior</span>
                        <ExternalLink className="w-3 h-3 opacity-60" />
                      </a>
                    </div>
                  </div>

                  <div className="text-right">
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">{t('contact', 'hours')}</h4>
                    <p className="text-white text-xs font-semibold mt-1">
                      <Clock className="w-3.5 h-3.5 inline mr-1 text-red-500" />
                      {t('contact', 'hoursValue')}
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Embedded Google Map with Exact Coordinates (-6.915228189935767, 107.6338078352852) */}
            <div className="bg-[#1A1A1A] border border-gray-800 rounded-sm overflow-hidden h-[210px] relative shadow-lg group">
              <iframe
                title="Lokasi IBCC Jalan Ahmad Yani Blok D3-6 Bandung Jaya Bersama Interior"
                src="https://maps.google.com/maps?q=-6.915228189935767,107.6338078352852&z=17&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(0.8) contrast(1.2) opacity(0.9)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md px-3 py-1 rounded text-[11px] text-gray-200 border border-white/10 flex items-center gap-1.5 pointer-events-none">
                <MapPin className="w-3 h-3 text-red-500" />
                <span>JL AHMAD YANI RUKO IBCC BLOK D3-6</span>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Project Inquiry & Consultation Form */}
          <div className="lg:col-span-6">
            <div className="bg-[#1A1A1A] border border-gray-800 rounded-sm p-6 sm:p-10 shadow-2xl h-full flex flex-col justify-between">
              
              <div>
                <div className="flex items-center gap-2 text-red-500 mb-2">
                  <MessageSquare className="w-5 h-5" />
                  <span className="text-xs font-extrabold uppercase tracking-widest">{t('contact', 'formTitle')}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">{t('contact', 'formHeading')}</h3>
                <p className="text-gray-400 text-xs sm:text-sm mt-2 leading-relaxed">
                  {t('contact', 'formDesc')}
                </p>

                {submitted ? (
                  <div className="mt-8 bg-emerald-950/40 border border-emerald-800/60 rounded-sm p-8 text-center space-y-3">
                    <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                    <h4 className="text-lg font-bold text-white">Pesan Anda Berhasil Terkirim!</h4>
                    <p className="text-gray-300 text-xs leading-relaxed max-w-md mx-auto">
                      Terima kasih atas minat Anda pada Jaya Bersama Interior. Tim sales kami di Ruko IBCC Ahmad Yani Blok D3-6 Bandung akan segera menghubungi Anda.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-4 inline-block px-5 py-2 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold rounded-sm transition-colors"
                    >
                      Kirim Pesan Lainnya
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1.5">
                        {t('contact', 'formName')}
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Contoh: Bpk. Hendra / Ibu Siska"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#111111] border border-gray-800 rounded-sm px-4 py-3 text-sm text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500/50 transition-colors placeholder:text-gray-600"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1.5">
                          {t('contact', 'formPhone')}
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="0882001078009"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full bg-[#111111] border border-gray-800 rounded-sm px-4 py-3 text-sm text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500/50 transition-colors placeholder:text-gray-600"
                        />
                      </div>

                      {/* STYLISH CUSTOM SELECT DROPDOWN */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1.5">
                          {t('contact', 'formCategory')}
                        </label>
                        <div className="relative">
                          <select
                            value={formData.category}
                            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                            className="w-full appearance-none bg-[#111111] border border-gray-800 hover:border-gray-700 rounded-sm px-4 py-3 pr-10 text-sm text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500/50 transition-all cursor-pointer font-medium"
                          >
                            {categories.map((cat) => (
                              <option key={cat} value={cat} className="bg-[#1A1A1A] text-white py-2">
                                {cat}
                              </option>
                            ))}
                          </select>
                          <div className="absolute inset-y-0 right-0 flex items-center px-3.5 pointer-events-none text-gray-400">
                            <ChevronDown className="w-4 h-4" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1.5">
                        {t('contact', 'formMessage')}
                      </label>
                      <textarea
                        rows={4}
                        placeholder={t('contact', 'formMessagePlaceholder')}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-[#111111] border border-gray-800 rounded-sm px-4 py-3 text-sm text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500/50 transition-colors placeholder:text-gray-600 resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider rounded-sm transition-all shadow-lg flex items-center justify-center gap-2 group active:scale-95 mt-2"
                    >
                      <span>{t('contact', 'formSubmit')}</span>
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </form>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-gray-800/80 text-center text-xs text-gray-500 flex flex-wrap items-center justify-between gap-2">
                <span>JL AHMAD YANI RUKO IBCC BLOK D3-6</span>
                <div className="flex items-center gap-3">
                  <a
                    href="https://wa.me/62882001078009"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 hover:underline flex items-center gap-1"
                  >
                    <span>WA: +62 882-0010-78009</span>
                  </a>
                  <span>•</span>
                  <a href="mailto:jayabersamainterior@gmail.com" className="text-red-400 hover:underline">
                    {t('contact', 'ctaEmail')}
                  </a>
                </div>
              </div>


            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactLocationSection;
