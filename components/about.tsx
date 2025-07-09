import { Card, CardContent } from "@/components/ui/card"
import { Brain, Database, Cog, TrendingUp } from "lucide-react"

const highlights = [
  {
    icon: Brain,
    title: "ML Pipeline Design",
    description: "Building robust ML pipelines for model training, validation, and deployment",
  },
  {
    icon: Database,
    title: "Data Engineering",
    description: "Managing data infrastructure and ETL processes for ML workflows",
  },
  {
    icon: Cog,
    title: "MLOps Automation",
    description: "Implementing CI/CD for ML models and automated monitoring systems",
  },
  {
    icon: TrendingUp,
    title: "Model Monitoring",
    description: "Ensuring model performance and detecting drift in production systems",
  },
]

export function About() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">About Me</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              MLOps Engineer with 3+ years of experience in financial technology and machine learning operations
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* About Content */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Bridging ML and Operations in Financial Services
              </h3>

              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p className="text-base sm:text-lg">
                  As an MLOps Engineer at Wing Bank PLC, I specialize in building and maintaining the infrastructure
                  that powers our machine learning initiatives. My work focuses on creating scalable, reliable, and
                  secure ML pipelines that serve millions of banking customers across our digital platform.
                </p>

                <p className="text-base sm:text-lg">
                  I'm passionate about automating ML workflows, implementing robust monitoring systems, and ensuring our
                  models perform reliably in production. My experience spans from data engineering and model deployment
                  to MLOps best practices and cloud infrastructure management.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-600">15+</div>
                  <div className="text-sm sm:text-base text-gray-600">ML Models</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-600">3+</div>
                  <div className="text-sm sm:text-base text-gray-600">Years</div>
                </div>
                <div className="text-center sm:col-span-1 col-span-2">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-600">99.9%</div>
                  <div className="text-sm sm:text-base text-gray-600">Uptime</div>
                </div>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                      <highlight.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{highlight.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{highlight.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
