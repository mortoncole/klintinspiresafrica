import { useState, useEffect } from 'react'

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)
  const [acceptedAll, setAcceptedAll] = useState(false)
  const [selectedPreferences, setSelectedPreferences] = useState({
    analytics: false,
    marketing: false,
  })

  useEffect(() => {
    const consentData = localStorage.getItem('cookieConsent')
    if (!consentData) {
      setIsVisible(true)
    } else {
      const preferences = JSON.parse(consentData)
      setSelectedPreferences(preferences)
      setAcceptedAll(preferences.analytics && preferences.marketing)
    }
  }, [])

  const handleAcceptAll = () => {
    const preferences = { analytics: true, marketing: true }
    localStorage.setItem('cookieConsent', JSON.stringify(preferences))
    setSelectedPreferences(preferences)
    setAcceptedAll(true)
    setIsVisible(false)
  }

  const handleAcceptSelected = () => {
    localStorage.setItem('cookieConsent', JSON.stringify(selectedPreferences))
    setIsVisible(false)
  }

  const handleTogglePreference = (key) => {
    setSelectedPreferences((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-brand-navy text-white p-4 sm:p-6 shadow-2xl">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Left: Description */}
          <div className="lg:col-span-2">
            <h3 className="text-lg sm:text-xl font-bold mb-2">Cookie & Privacy Settings</h3>
            <p className="text-white/80 text-sm leading-relaxed mb-4">
              We use cookies to enhance your experience and analyze site usage. By accepting, you agree to our use of cookies as described in our{' '}
              <a href="/privacy" className="text-brand-orange hover:underline font-semibold">
                Privacy Policy
              </a>{' '}
              and{' '}
              <a href="/terms" className="text-brand-orange hover:underline font-semibold">
                Terms of Service
              </a>
              .
            </p>

            {/* Preference Toggles */}
            <div className="space-y-2 mb-4">
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={selectedPreferences.analytics}
                  onChange={() => handleTogglePreference('analytics')}
                  className="w-4 h-4 rounded border-white/30 cursor-pointer"
                />
                <div>
                  <p className="font-semibold text-sm">Analytics & Performance</p>
                  <p className="text-white/60 text-xs">Understand how you use our site</p>
                </div>
              </label>

              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={selectedPreferences.marketing}
                  onChange={() => handleTogglePreference('marketing')}
                  className="w-4 h-4 rounded border-white/30 cursor-pointer"
                />
                <div>
                  <p className="font-semibold text-sm">Marketing</p>
                  <p className="text-white/60 text-xs">Personalized content and updates</p>
                </div>
              </label>
            </div>
          </div>

          {/* Right: Action Buttons */}
          <div className="flex flex-col gap-3 justify-center">
            <button
              onClick={handleAcceptAll}
              className="w-full px-4 py-3 rounded-lg bg-brand-orange hover:bg-brand-orange-dark text-white font-bold text-sm transition-colors duration-200"
            >
              Accept All
            </button>
            <button
              onClick={handleAcceptSelected}
              className="w-full px-4 py-3 rounded-lg border-2 border-white/30 hover:border-white text-white font-bold text-sm transition-colors duration-200"
            >
              Save Preferences
            </button>
            <a
              href="/privacy"
              className="w-full px-4 py-3 rounded-lg border-2 border-white/20 hover:border-white/40 text-white font-semibold text-sm text-center transition-colors duration-200"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
