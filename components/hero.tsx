import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900"
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%239C92AC' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Profile Image */}
          <div className="mb-8">
            <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 mx-auto rounded-full bg-gradient-to-br from-blue-400 to-purple-600 p-1">
              <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gray-400 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Hero Text */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">John Doe</span>
          </h1>

          <p className="text-xl sm:text-2xl lg:text-3xl text-blue-200 mb-4 font-light">MLOps Engineer</p>

          <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            I build and maintain scalable ML infrastructure and deployment pipelines at Wing Bank PLC. Passionate about
            MLOps, automation, and delivering reliable machine learning solutions in production.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="text-base px-8 py-3 bg-blue-600 hover:bg-blue-700">
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-base px-8 py-3 border-white text-white hover:bg-white hover:text-gray-900 bg-transparent"
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              <Github className="w-6 h-6 sm:w-7 sm:h-7" />
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              <Linkedin className="w-6 h-6 sm:w-7 sm:h-7" />
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              <Mail className="w-6 h-6 sm:w-7 sm:h-7" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ArrowDown className="w-6 h-6 text-gray-300 mx-auto" />
          </div>
        </div>
      </div>
    </section>
  )
}
