import { Card, CardContent } from "@/components/ui/card"

const galleryItems = [
  { id: 1, title: "Mobile App", category: "Mobile" },
  { id: 2, title: "Web Dashboard", category: "Desktop" },
  { id: 3, title: "Tablet Interface", category: "Tablet" },
  { id: 4, title: "Responsive Layout", category: "All Devices" },
  { id: 5, title: "Touch Interface", category: "Mobile" },
  { id: 6, title: "Desktop App", category: "Desktop" },
  { id: 7, title: "Adaptive Design", category: "All Devices" },
  { id: 8, title: "Mobile First", category: "Mobile" },
]

export function Gallery() {
  return (
    <section id="gallery" className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Responsive Gallery</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            See how our designs adapt beautifully across different screen sizes and devices.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {galleryItems.map((item) => (
            <Card key={item.id} className="group overflow-hidden hover:shadow-lg transition-all duration-300">
              <CardContent className="p-0">
                <div className="aspect-square bg-gradient-to-br from-blue-400 to-purple-600 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-4">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-full"></div>
                      </div>
                      <h3 className="font-semibold text-sm sm:text-base">{item.title}</h3>
                      <p className="text-xs sm:text-sm opacity-90">{item.category}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
