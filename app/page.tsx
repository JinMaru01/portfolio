import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Database,
  Cloud,
  GitBranch,
  Server,
  BarChart3,
  Zap,
  Shield,
  Monitor,
} from "lucide-react"
import Link from "next/link"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <Code className="h-6 w-6" />
              <span className="font-bold">MLOps Portfolio</span>
            </Link>
          </div>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link href="#about" className="transition-colors hover:text-foreground/80">
              About
            </Link>
            <Link href="#experience" className="transition-colors hover:text-foreground/80">
              Experience
            </Link>
            <Link href="#projects" className="transition-colors hover:text-foreground/80">
              Projects
            </Link>
            <Link href="#skills" className="transition-colors hover:text-foreground/80">
              Skills
            </Link>
            <Link href="#contact" className="transition-colors hover:text-foreground/80">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container py-24 md:py-32">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">MLOps Engineer</h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Bridging the gap between machine learning and production systems. Specializing in scalable ML
              infrastructure, automated pipelines, and model deployment.
            </p>
          </div>
          <div className="flex space-x-4">
            <Button size="lg">
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Button>
            <Button variant="outline" size="lg">
              <Github className="mr-2 h-4 w-4" />
              View GitHub
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tighter mb-8">About Me</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                I'm a passionate MLOps Engineer with 5+ years of experience in designing and implementing scalable
                machine learning infrastructure. I specialize in automating ML workflows, optimizing model deployment
                pipelines, and ensuring reliable production ML systems.
              </p>
              <p className="text-gray-600 leading-relaxed">
                My expertise spans across cloud platforms, containerization, orchestration tools, and monitoring
                systems. I'm committed to bridging the gap between data science and production engineering to deliver
                robust ML solutions.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Core Competencies</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <Zap className="mr-2 h-4 w-4 text-blue-500" />
                  ML Pipeline Automation
                </li>
                <li className="flex items-center">
                  <Cloud className="mr-2 h-4 w-4 text-blue-500" />
                  Cloud Infrastructure (AWS, GCP, Azure)
                </li>
                <li className="flex items-center">
                  <Server className="mr-2 h-4 w-4 text-blue-500" />
                  Container Orchestration (Docker, Kubernetes)
                </li>
                <li className="flex items-center">
                  <Monitor className="mr-2 h-4 w-4 text-blue-500" />
                  Model Monitoring & Observability
                </li>
                <li className="flex items-center">
                  <Shield className="mr-2 h-4 w-4 text-blue-500" />
                  CI/CD for ML Systems
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="container py-16 bg-white">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tighter mb-8">Experience</h2>
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Senior MLOps Engineer</CardTitle>
                    <CardDescription>TechCorp Inc. • 2022 - Present</CardDescription>
                  </div>
                  <Badge variant="secondary">Current</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Led the design and implementation of ML infrastructure serving 10M+ daily predictions</li>
                  <li>• Reduced model deployment time from 2 weeks to 2 hours using automated CI/CD pipelines</li>
                  <li>• Implemented comprehensive monitoring system reducing model drift incidents by 80%</li>
                  <li>• Managed Kubernetes clusters with 50+ ML services across multiple environments</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>MLOps Engineer</CardTitle>
                <CardDescription>DataFlow Solutions • 2020 - 2022</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Built end-to-end ML pipelines using Apache Airflow and MLflow</li>
                  <li>• Migrated legacy ML systems to cloud-native architecture on AWS</li>
                  <li>• Established model versioning and experiment tracking workflows</li>
                  <li>• Collaborated with data science teams to productionize 15+ ML models</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Data Engineer</CardTitle>
                <CardDescription>StartupAI • 2019 - 2020</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Designed data pipelines processing 1TB+ daily using Apache Spark</li>
                  <li>• Implemented real-time feature stores using Redis and Apache Kafka</li>
                  <li>• Optimized data processing workflows reducing costs by 40%</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold tracking-tighter mb-8">Featured Projects</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="mr-2 h-5 w-5" />
                  ML Platform
                </CardTitle>
                <CardDescription>
                  End-to-end ML platform with automated training, deployment, and monitoring
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Kubernetes</Badge>
                    <Badge variant="outline">MLflow</Badge>
                    <Badge variant="outline">Prometheus</Badge>
                    <Badge variant="outline">Grafana</Badge>
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                    <Button size="sm" variant="outline">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Zap className="mr-2 h-5 w-5" />
                  AutoML Pipeline
                </CardTitle>
                <CardDescription>Automated machine learning pipeline with hyperparameter optimization</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Apache Airflow</Badge>
                    <Badge variant="outline">Optuna</Badge>
                    <Badge variant="outline">Docker</Badge>
                    <Badge variant="outline">AWS</Badge>
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                    <Button size="sm" variant="outline">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Monitor className="mr-2 h-5 w-5" />
                  Model Monitoring
                </CardTitle>
                <CardDescription>Real-time model performance monitoring and drift detection system</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Python</Badge>
                    <Badge variant="outline">FastAPI</Badge>
                    <Badge variant="outline">PostgreSQL</Badge>
                    <Badge variant="outline">Redis</Badge>
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                    <Button size="sm" variant="outline">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Database className="mr-2 h-5 w-5" />
                  Feature Store
                </CardTitle>
                <CardDescription>Scalable feature store for ML feature management and serving</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Apache Spark</Badge>
                    <Badge variant="outline">Delta Lake</Badge>
                    <Badge variant="outline">Kafka</Badge>
                    <Badge variant="outline">GCP</Badge>
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                    <Button size="sm" variant="outline">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <GitBranch className="mr-2 h-5 w-5" />
                  ML CI/CD
                </CardTitle>
                <CardDescription>Continuous integration and deployment pipeline for ML models</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">GitHub Actions</Badge>
                    <Badge variant="outline">Terraform</Badge>
                    <Badge variant="outline">Helm</Badge>
                    <Badge variant="outline">ArgoCD</Badge>
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                    <Button size="sm" variant="outline">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="mr-2 h-5 w-5" />
                  ML Security
                </CardTitle>
                <CardDescription>Security framework for ML models including adversarial detection</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Python</Badge>
                    <Badge variant="outline">TensorFlow</Badge>
                    <Badge variant="outline">Vault</Badge>
                    <Badge variant="outline">Istio</Badge>
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                    <Button size="sm" variant="outline">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="container py-16 bg-white">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tighter mb-8">Technical Skills</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Code className="mr-2 h-5 w-5" />
                Programming
              </h3>
              <div className="flex flex-wrap gap-2">
                <Badge>Python</Badge>
                <Badge>Go</Badge>
                <Badge>Bash</Badge>
                <Badge>SQL</Badge>
                <Badge>YAML</Badge>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Cloud className="mr-2 h-5 w-5" />
                Cloud Platforms
              </h3>
              <div className="flex flex-wrap gap-2">
                <Badge>AWS</Badge>
                <Badge>Google Cloud</Badge>
                <Badge>Azure</Badge>
                <Badge>Terraform</Badge>
                <Badge>CloudFormation</Badge>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Server className="mr-2 h-5 w-5" />
                Infrastructure
              </h3>
              <div className="flex flex-wrap gap-2">
                <Badge>Kubernetes</Badge>
                <Badge>Docker</Badge>
                <Badge>Helm</Badge>
                <Badge>Istio</Badge>
                <Badge>NGINX</Badge>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Database className="mr-2 h-5 w-5" />
                Data & ML Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                <Badge>MLflow</Badge>
                <Badge>Kubeflow</Badge>
                <Badge>Apache Airflow</Badge>
                <Badge>Apache Spark</Badge>
                <Badge>Kafka</Badge>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Monitor className="mr-2 h-5 w-5" />
                Monitoring
              </h3>
              <div className="flex flex-wrap gap-2">
                <Badge>Prometheus</Badge>
                <Badge>Grafana</Badge>
                <Badge>ELK Stack</Badge>
                <Badge>Jaeger</Badge>
                <Badge>DataDog</Badge>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <GitBranch className="mr-2 h-5 w-5" />
                DevOps
              </h3>
              <div className="flex flex-wrap gap-2">
                <Badge>GitHub Actions</Badge>
                <Badge>GitLab CI</Badge>
                <Badge>ArgoCD</Badge>
                <Badge>Jenkins</Badge>
                <Badge>Ansible</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tighter mb-8">Get In Touch</h2>
          <p className="text-gray-600 mb-8">
            I'm always interested in discussing new opportunities, innovative projects, or just chatting about the
            latest in MLOps and machine learning infrastructure.
          </p>
          <div className="flex justify-center space-x-4">
            <Button size="lg">
              <Mail className="mr-2 h-4 w-4" />
              Email Me
            </Button>
            <Button variant="outline" size="lg">
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </Button>
            <Button variant="outline" size="lg">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container text-center text-gray-600">
          <p>&copy; 2024 MLOps Portfolio. Built with Next.js and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  )
}
