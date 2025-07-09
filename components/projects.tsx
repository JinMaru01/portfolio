import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Credit Risk ML Pipeline",
    description:
      "End-to-end ML pipeline for credit risk assessment using ensemble models. Automated training, validation, and deployment with real-time monitoring and A/B testing capabilities.",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["Python", "MLflow", "Kubernetes", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Fraud Detection System",
    description:
      "Real-time fraud detection system processing thousands of transactions per second. Implemented feature engineering, model serving, and automated retraining workflows.",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["TensorFlow", "Apache Kafka", "Redis", "Docker"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Customer Segmentation Platform",
    description:
      "Automated customer segmentation using clustering algorithms with scheduled retraining and drift detection. Integrated with marketing automation systems.",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["Scikit-learn", "Airflow", "AWS S3", "Grafana"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Model Monitoring Dashboard",
    description:
      "Comprehensive monitoring solution for ML models in production. Tracks performance metrics, data drift, and model degradation with automated alerting.",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["Prometheus", "Grafana", "Python", "FastAPI"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Automated Feature Store",
    description:
      "Centralized feature store with automated feature engineering, versioning, and serving capabilities. Supports both batch and real-time feature computation.",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["Apache Spark", "Delta Lake", "Kubernetes", "Python"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "ML Model Registry",
    description:
      "Custom model registry solution for versioning, staging, and deploying ML models with approval workflows and automated testing integration.",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["MLflow", "FastAPI", "PostgreSQL", "Docker"],
    liveUrl: "#",
    githubUrl: "#",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              MLOps projects and systems I've built at Wing Bank PLC and personal initiatives
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                  {/* Project Image */}
                  <div className="aspect-video bg-gradient-to-br from-blue-400 to-purple-600 relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                        <div className="w-8 h-8 bg-white rounded-full"></div>
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{project.description}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <Button size="sm" className="flex-1">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Details
                      </Button>
                      <Button variant="outline" size="sm">
                        <Github className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              View All Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
