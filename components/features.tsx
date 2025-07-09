import { Card, CardContent } from "@/components/ui/card"
import { Smartphone, Tablet, Monitor, Zap, Shield, Globe } from "lucide-react"

const features = [
  {
    icon: Smartphone,
    title: "Mobile First",
    description: "Designed with mobile users in mind, ensuring perfect touch interactions and performance.",
  },
  {
    icon: Tablet,
    title: "Tablet Optimized",
    description: "Seamless experience across all tablet sizes with adaptive layouts and gestures.",
  },
  {
    icon: Monitor,
    title: "Desktop Ready",
    description: "Full-featured desktop experience with advanced interactions and workflows.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized performance across all devices with minimal loading times.",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Enterprise-grade security with 99.9% uptime guarantee.",
  },
  {
    icon: Globe,
    title: "Global Scale",
    description: "CDN-powered delivery ensuring fast access worldwide.",
  },
]

export function Features() {
  return (
    <section id="features" className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Works on Every Device</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Our responsive design system ensures your content looks perfect whether your users are on their phone,
            tablet, or desktop computer.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 lg:p-8">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                  <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 text-blue-600" />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
