
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-app-blue to-blue-600 text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/>
                <polyline points="10 17 15 12 10 7"/>
                <line x1="15" x2="3" y1="12" y2="12"/>
              </svg>
            </div>
            <h1 className="text-xl font-bold">DEMO-MAKE-APP</h1>
          </div>
          <div>
            <Button
              variant="outline"
              className="bg-white text-app-blue hover:bg-gray-100"
              onClick={() => window.open("https://github.com/yourusername/demo-make-app", "_blank")}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                <path d="M9 18c-4.51 2-5-2-7-2"/>
              </svg>
              GitHub
            </Button>
          </div>
        </div>
      </header>
      
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-app-orange text-white text-sm font-bold px-3 py-1 rounded-full inline-block mb-4">
                Educational Prototype
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-app-navy mb-6">
                AI-Powered Microscopy for K-12 Science Education
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                DEMO-MAKE-APP is an educational platform that combines microscopic imaging, 
                gamified learning, and AI technology to engage K-12 students in science exploration.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button 
                  className="bg-app-blue hover:bg-blue-700 text-lg px-6"
                  onClick={() => navigate("/mobile/login")}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                    <rect width="14" height="20" x="5" y="2" rx="2" ry="2"/>
                    <path d="M12 18h.01"/>
                  </svg>
                  Try Mobile App
                </Button>
                
                <Button 
                  variant="outline"
                  className="text-lg px-6"
                  onClick={() => navigate("/admin/login")}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                    <rect width="20" height="14" x="2" y="3" rx="2"/>
                    <line x1="8" x2="16" y1="21" y2="21"/>
                    <line x1="12" x2="12" y1="17" y2="21"/>
                  </svg>
                  Try Admin Panel
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -top-6 -right-6 w-64 h-64 bg-app-light-blue rounded-full opacity-50 z-0"></div>
              <div className="relative z-10 flex justify-center">
                <div className="mobile-layout shadow-xl">
                  <div className="mobile-header">
                    <div className="flex items-center">
                      <h1 className="text-xl font-bold">Home</h1>
                    </div>
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/>
                        <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>
                      </svg>
                    </div>
                  </div>
                  
                  <div className="mobile-content">
                    <div className="bg-white rounded-xl p-4 mb-4 shadow-sm animate-pulse-scale">
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full bg-app-light-blue flex items-center justify-center mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-app-blue">
                            <circle cx="12" cy="12" r="10"/>
                            <circle cx="12" cy="10" r="3"/>
                            <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"/>
                          </svg>
                        </div>
                        <div>
                          <p className="text-gray-600">Welcome back,</p>
                          <h2 className="text-xl font-bold">Alex Johnson</h2>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-xl p-4 mb-4 shadow-sm">
                      <div className="flex justify-between items-center mb-3">
                        <h3 className="font-bold">Your Progress</h3>
                        <span className="text-app-orange font-bold">320 pts</span>
                      </div>
                      <div className="h-2 rounded-full bg-gray-200 overflow-hidden">
                        <div className="h-full rounded-full bg-app-blue w-3/5"></div>
                      </div>
                      <div className="flex justify-between text-xs text-gray-600 mt-2">
                        <span>3 completed</span>
                        <span>5 total missions</span>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-3">
                        <h3 className="font-bold">Your Badges</h3>
                        <button className="text-sm text-app-blue">
                          View all
                        </button>
                      </div>
                      
                      <div className="flex space-x-3 overflow-x-auto pb-2">
                        <div className="flex flex-col items-center min-w-[4rem]">
                          <div className="w-10 h-10 bg-app-green rounded-full flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <circle cx="12" cy="8" r="7"/>
                              <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
                            </svg>
                          </div>
                          <span className="text-xs mt-1 text-center">Plant Explorer</span>
                        </div>
                        <div className="flex flex-col items-center min-w-[4rem]">
                          <div className="w-10 h-10 bg-app-purple rounded-full flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <circle cx="12" cy="8" r="7"/>
                              <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
                            </svg>
                          </div>
                          <span className="text-xs mt-1 text-center">Cell Comparer</span>
                        </div>
                        <div className="flex flex-col items-center min-w-[4rem]">
                          <div className="w-10 h-10 bg-app-yellow rounded-full flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <circle cx="12" cy="8" r="7"/>
                              <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
                            </svg>
                          </div>
                          <span className="text-xs mt-1 text-center">First Submission</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <nav className="mobile-nav">
                    <div className="nav-item active">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                        <polyline points="9 22 9 12 15 12 15 22"/>
                      </svg>
                      <span className="text-xs mt-1">Home</span>
                    </div>
                    <div className="nav-item">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
                        <line x1="16" x2="16" y1="2" y2="6"/>
                        <line x1="8" x2="8" y1="2" y2="6"/>
                        <line x1="3" x2="21" y1="10" y2="10"/>
                      </svg>
                      <span className="text-xs mt-1">Missions</span>
                    </div>
                    <div className="nav-item">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
                        <circle cx="12" cy="13" r="4"/>
                      </svg>
                      <span className="text-xs mt-1">Camera</span>
                    </div>
                    <div className="nav-item">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"/>
                        <circle cx="12" cy="10" r="3"/>
                        <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"/>
                      </svg>
                      <span className="text-xs mt-1">Profile</span>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-app-navy mb-4">Key Features</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              DEMO-MAKE-APP combines cutting-edge technology with educational methodologies 
              to create an engaging learning experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-14 h-14 bg-app-light-blue rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-app-blue">
                  <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
                  <circle cx="12" cy="13" r="4"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">AI Image Classification</h3>
              <p className="text-gray-600">
                Students capture microscopic images that are instantly classified by our AI system, 
                providing real-time learning feedback.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-14 h-14 bg-app-light-blue rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-app-blue">
                  <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
                  <line x1="16" x2="16" y1="2" y2="6"/>
                  <line x1="8" x2="8" y1="2" y2="6"/>
                  <line x1="3" x2="21" y1="10" y2="10"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Science Missions</h3>
              <p className="text-gray-600">
                Teacher-assigned missions guide students through the scientific method, 
                encouraging exploration and discovery.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-14 h-14 bg-app-light-blue rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-app-blue">
                  <circle cx="12" cy="8" r="7"/>
                  <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Gamified Learning</h3>
              <p className="text-gray-600">
                Points, badges, and leaderboards motivate students to complete missions 
                and engage deeply with science concepts.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-gradient-to-r from-app-blue to-blue-600 rounded-2xl p-8 lg:p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to explore?</h2>
            <p className="max-w-2xl mx-auto mb-8">
              Experience both the student mobile application and the teacher admin panel 
              in this interactive prototype.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                className="bg-white text-app-blue hover:bg-gray-100 text-lg px-6"
                onClick={() => navigate("/mobile/login")}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <rect width="14" height="20" x="5" y="2" rx="2" ry="2"/>
                  <path d="M12 18h.01"/>
                </svg>
                Try Mobile App
              </Button>
              
              <Button 
                variant="outline"
                className="text-white border-white hover:bg-white/10 text-lg px-6"
                onClick={() => navigate("/admin/login")}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <rect width="20" height="14" x="2" y="3" rx="2"/>
                  <line x1="8" x2="16" y1="21" y2="21"/>
                  <line x1="12" x2="12" y1="17" y2="21"/>
                </svg>
                Try Admin Panel
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="w-10 h-10 bg-white bg-opacity-10 rounded-lg flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/>
                  <polyline points="10 17 15 12 10 7"/>
                  <line x1="15" x2="3" y1="12" y2="12"/>
                </svg>
              </div>
              <div>
                <h3 className="font-bold">DEMO-MAKE-APP</h3>
                <p className="text-sm text-gray-400">Educational Prototype</p>
              </div>
            </div>
            
            <div className="text-sm text-gray-400">
              &copy; 2023 DEMO-MAKE-APP. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
