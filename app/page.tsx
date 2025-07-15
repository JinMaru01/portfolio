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
              <span className="font-bold">Darachin Kong</span>
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
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">Darachin Kong</h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              MLOps Engineer at Wing Bank. Currently exploring centralized ML model inference, drift detection, and
              automated retraining systems. Specializing in production-ready ML operations and intelligent financial
              services solutions.
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
                I'm a passionate MLOps Engineer currently working at Wing Bank in Cambodia with hands-on experience in
                developing ML-powered solutions for financial services. Currently exploring advanced MLOps tools for
                centralized machine learning model inference, automated drift detection, and model retraining systems to
                ensure robust production ML operations.
              </p>
              <p className="text-gray-600 leading-relaxed">
                My expertise includes API development with Flask, MLflow for experiment tracking, and developing NLP
                solutions using pretrained models like DistilBERT. I'm passionate about building resilient, self-healing
                ML systems that maintain performance and accuracy in production environments.
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

      {/* Current Focus Section */}
      <section className="container py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center">Current Focus & Research</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-blue-700">
                  <Server className="mr-2 h-5 w-5" />
                  Centralized Model Inference
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Exploring tools and architectures for centralized ML model serving, including model registries,
                  inference servers, and scalable deployment patterns for multiple models.
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  <Badge variant="outline">MLflow Model Registry</Badge>
                  <Badge variant="outline">Seldon Core</Badge>
                  <Badge variant="outline">KServe</Badge>
                  <Badge variant="outline">TorchServe</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-orange-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-orange-700">
                  <Monitor className="mr-2 h-5 w-5" />
                  Model Drift Detection
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Investigating advanced drift detection techniques including data drift, concept drift, and performance
                  degradation monitoring for production ML models.
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  <Badge variant="outline">Evidently AI</Badge>
                  <Badge variant="outline">WhyLabs</Badge>
                  <Badge variant="outline">Alibi Detect</Badge>
                  <Badge variant="outline">Great Expectations</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-green-700">
                  <Zap className="mr-2 h-5 w-5" />
                  Automated Retraining
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Researching automated model retraining pipelines that trigger based on performance thresholds, drift
                  detection, and scheduled intervals with proper validation gates.
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  <Badge variant="outline">Apache Airflow</Badge>
                  <Badge variant="outline">Kubeflow Pipelines</Badge>
                  <Badge variant="outline">MLflow</Badge>
                  <Badge variant="outline">DVC</Badge>
                </div>
              </CardContent>
            </Card>
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
                    <CardTitle>MLOps Engineer</CardTitle>
                    <CardDescription>Wing Bank • Jun 2025 - Present</CardDescription>
                  </div>
                  <Badge variant="secondary">Current</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Full-time on-site role focusing on MLOps infrastructure and practices</li>
                  <li>• Developing and maintaining machine learning operations pipelines</li>
                  <li>• Working with API development and Flask framework</li>
                  <li>• Contributing to ML system architecture and deployment strategies</li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="outline">API Development</Badge>
                  <Badge variant="outline">Flask</Badge>
                  <Badge variant="outline">MLOps</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>MLOps Apprentice</CardTitle>
                <CardDescription>Wing Bank • Feb 2025 - Present (6 months)</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Intent-Based Chatbot</h4>
                    <p className="text-gray-600 text-sm mb-2">
                      Designed and implemented an internal chatbot to assist employees in retrieving information about
                      company policies, rules, and procedures. Integrated NLP techniques for intent classification and
                      entity recognition using a pretrained model (DistilBERT) to improve employee support efficiency.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Loan Decision Engine (ADE)</h4>
                    <p className="text-gray-600 text-sm mb-2">
                      Collaborated in the development of a machine learning-based decision engine to automate credit
                      score predictions. Integrated predictive models to evaluate customer profiles and make real-time
                      loan approval or rejection decisions, enhancing processing speed and accuracy.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge variant="outline">MLflow</Badge>
                    <Badge variant="outline">API Development</Badge>
                    <Badge variant="outline">DistilBERT</Badge>
                    <Badge variant="outline">NLP</Badge>
                    <Badge variant="outline">Credit Scoring</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Data Analyst Intern</CardTitle>
                <CardDescription>SINET • Jan 2024 - Apr 2024 (4 months)</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Performed time series analysis for business intelligence</li>
                  <li>• Created interactive dashboards and reports using Microsoft Power BI</li>
                  <li>• Analyzed data trends and provided insights for decision-making</li>
                  <li>• Gained experience in data visualization and business analytics</li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="outline">Time Series Analysis</Badge>
                  <Badge variant="outline">Microsoft Power BI</Badge>
                  <Badge variant="outline">Data Analysis</Badge>
                </div>
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
                  Intent-Based Chatbot
                </CardTitle>
                <CardDescription>
                  Internal employee assistance chatbot with NLP-powered intent classification
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-sm text-gray-600">
                    Designed and implemented an intelligent chatbot system to help Wing Bank employees access company
                    policies and procedures efficiently using DistilBERT for NLP processing.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">DistilBERT</Badge>
                    <Badge variant="outline">NLP</Badge>
                    <Badge variant="outline">Intent Classification</Badge>
                    <Badge variant="outline">Entity Recognition</Badge>
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Zap className="mr-2 h-5 w-5" />
                  Loan Decision Engine (ADE)
                </CardTitle>
                <CardDescription>ML-based automated credit scoring and loan approval system</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-sm text-gray-600">
                    Collaborated on developing an automated decision engine for credit score predictions and real-time
                    loan approval/rejection decisions, improving processing efficiency.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">MLflow</Badge>
                    <Badge variant="outline">Credit Scoring</Badge>
                    <Badge variant="outline">Real-time Processing</Badge>
                    <Badge variant="outline">Predictive Models</Badge>
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Server className="mr-2 h-5 w-5" />
                  Centralized Model Inference Platform
                </CardTitle>
                <CardDescription>
                  Research and development of centralized ML model serving infrastructure
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-sm text-gray-600">
                    Exploring tools and architectures for centralized model inference including model registries, A/B
                    testing capabilities, and scalable serving infrastructure for multiple ML models.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">MLflow Model Registry</Badge>
                    <Badge variant="outline">Seldon Core</Badge>
                    <Badge variant="outline">KServe</Badge>
                    <Badge variant="outline">Model Versioning</Badge>
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline">
                      <Github className="mr-2 h-4 w-4" />
                      Research
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Monitor className="mr-2 h-5 w-5" />
                  ML Drift Detection System
                </CardTitle>
                <CardDescription>Advanced monitoring system for detecting model and data drift</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-sm text-gray-600">
                    Developing comprehensive drift detection capabilities including statistical tests, performance
                    monitoring, and automated alerting for production ML models.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Evidently AI</Badge>
                    <Badge variant="outline">Statistical Testing</Badge>
                    <Badge variant="outline">Performance Monitoring</Badge>
                    <Badge variant="outline">Alerting</Badge>
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Zap className="mr-2 h-5 w-5" />
                  Automated Retraining Pipeline
                </CardTitle>
                <CardDescription>Self-healing ML system with automated model retraining</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-sm text-gray-600">
                    Building intelligent retraining pipelines that automatically trigger based on drift detection,
                    performance degradation, and scheduled intervals with proper validation and rollback mechanisms.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Apache Airflow</Badge>
                    <Badge variant="outline">Trigger Logic</Badge>
                    <Badge variant="outline">Validation Gates</Badge>
                    <Badge variant="outline">Auto-rollback</Badge>
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline">
                      <Github className="mr-2 h-4 w-4" />
                      Code
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
                <Badge>Seldon Core</Badge>
                <Badge>KServe</Badge>
                <Badge>Evidently AI</Badge>
                <Badge>TorchServe</Badge>
                <Badge>DVC</Badge>
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
          <p>&copy; 2024 Darachin Kong. MLOps Engineer Portfolio.</p>
        </div>
      </footer>
    </div>
  )
}
