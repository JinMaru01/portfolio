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
    <div className="min-h-screen bg-background text-foreground">{/* Clean, minimal background */}

      {/* Header */}
      <header className="fixed top-0 z-50 w-full bg-background/90 backdrop-blur-md border-b border-border">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link href="/" className="font-bold text-lg tracking-tight">
            DK
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 text-sm">
            <Link href="#about" className="transition-colors hover:text-secondary">
              About
            </Link>
            <Link href="#experience" className="transition-colors hover:text-secondary">
              Experience
            </Link>
            <Link href="#projects" className="transition-colors hover:text-secondary">
              Projects
            </Link>
            <Link href="#contact" className="transition-colors hover:text-secondary">
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="sm" className="md:hidden h-8 w-8">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-16 sm:pb-24 md:pb-32">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
                Darachin Kong
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                MLOps Engineer at Wing Bank. Building production machine learning systems with focus on centralized model inference, drift detection, and automated retraining pipelines.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Get In Touch
              </Button>
              <Button variant="outline" size="lg">
                View GitHub
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-24 border-t border-border">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold mb-12">About</h2>
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm an MLOps Engineer at Wing Bank specializing in production machine learning systems. With hands-on experience in developing ML-powered solutions for financial services, I focus on building robust, scalable infrastructure for AI systems.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Currently exploring advanced tools for centralized model inference, drift detection, and automated retraining. Passionate about creating self-healing ML systems that maintain performance and accuracy in production environments.
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="text-xl font-semibold">Expertise</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="mr-3 text-secondary">→</span>
                  <span>ML Pipeline Automation & Orchestration</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-secondary">→</span>
                  <span>Cloud Infrastructure (AWS, GCP, Azure)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-secondary">→</span>
                  <span>Container Orchestration & Docker</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-secondary">→</span>
                  <span>Model Monitoring & Observability</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-secondary">→</span>
                  <span>CI/CD for ML Systems</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Current Focus Section */}
      <section className="py-16 sm:py-24 border-t border-border">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold mb-12">Current Focus</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="space-y-4">
              <h3 className="font-semibold text-lg flex items-center">
                <span className="text-secondary mr-3">01</span>
                Centralized Model Inference
              </h3>
              <p className="text-muted-foreground">
                Exploring model serving architectures, registries, and inference servers for scalable ML deployment.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="text-xs">MLflow</Badge>
                <Badge variant="secondary" className="text-xs">Seldon</Badge>
                <Badge variant="secondary" className="text-xs">KServe</Badge>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-lg flex items-center">
                <span className="text-secondary mr-3">02</span>
                Model Drift Detection
              </h3>
              <p className="text-muted-foreground">
                Investigating drift detection techniques and performance degradation monitoring for production systems.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="text-xs">Evidently</Badge>
                <Badge variant="secondary" className="text-xs">WhyLabs</Badge>
                <Badge variant="secondary" className="text-xs">Alibi</Badge>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-lg flex items-center">
                <span className="text-secondary mr-3">03</span>
                Automated Retraining
              </h3>
              <p className="text-muted-foreground">
                Building automated retraining pipelines with performance-based triggers and validation gates.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="text-xs">Airflow</Badge>
                <Badge variant="secondary" className="text-xs">Kubeflow</Badge>
                <Badge variant="secondary" className="text-xs">DVC</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 sm:py-24 border-t border-border">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold mb-12">Experience</h2>
          <div className="space-y-12">
            {/* MLOps Engineer - Current */}
            <div className="border-l-2 border-secondary pl-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold">MLOps Engineer</h3>
                  <p className="text-muted-foreground">Wing Bank</p>
                </div>
                <span className="text-sm text-muted-foreground">Jun 2025 - Present</span>
              </div>
              <ul className="space-y-2 text-muted-foreground mb-4">
                <li>Full-time on-site role focusing on MLOps infrastructure and practices</li>
                <li>Developing and maintaining machine learning operations pipelines</li>
                <li>Working with API development and Flask framework</li>
              </ul>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="text-xs">API Development</Badge>
                <Badge variant="secondary" className="text-xs">Flask</Badge>
                <Badge variant="secondary" className="text-xs">MLOps</Badge>
              </div>
            </div>

            {/* MLOps Apprentice */}
            <div className="border-l-2 border-secondary pl-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold">MLOps Apprentice</h3>
                  <p className="text-muted-foreground">Wing Bank</p>
                </div>
                <span className="text-sm text-muted-foreground">Feb 2025 - Jun 2025</span>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">Intent-Based Chatbot</h4>
                  <p className="text-muted-foreground">
                    Designed and implemented an internal chatbot for employee information retrieval. Integrated NLP techniques for intent classification using DistilBERT to improve support efficiency.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Loan Decision Engine (ADE)</h4>
                  <p className="text-muted-foreground">
                    Collaborated on ML-based decision engine for automated credit scoring. Integrated predictive models for real-time loan approval decisions, enhancing speed and accuracy.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                <Badge variant="secondary" className="text-xs">MLflow</Badge>
                <Badge variant="secondary" className="text-xs">DistilBERT</Badge>
                <Badge variant="secondary" className="text-xs">NLP</Badge>
                <Badge variant="secondary" className="text-xs">Credit Scoring</Badge>
              </div>
            </div>

            {/* Data Analyst Intern */}
            <div className="border-l-2 border-secondary pl-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold">Data Analyst Intern</h3>
                  <p className="text-muted-foreground">SINET</p>
                </div>
                <span className="text-sm text-muted-foreground">Jan 2024 - Apr 2024</span>
              </div>
              <ul className="space-y-2 text-muted-foreground mb-4">
                <li>Performed time series analysis for business intelligence</li>
                <li>Created interactive dashboards using Microsoft Power BI</li>
                <li>Analyzed data trends and provided insights for decision-making</li>
              </ul>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="text-xs">Time Series</Badge>
                <Badge variant="secondary" className="text-xs">Power BI</Badge>
                <Badge variant="secondary" className="text-xs">Data Analysis</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 sm:py-24 border-t border-border">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold mb-12">Projects</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="border border-border rounded-lg p-6 hover:border-secondary transition-colors">
              <h3 className="text-lg font-bold mb-2">Intent-Based Chatbot</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Intelligent chatbot system to help employees access company policies and procedures using DistilBERT for NLP processing.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="text-xs">DistilBERT</Badge>
                <Badge variant="secondary" className="text-xs">NLP</Badge>
                <Badge variant="secondary" className="text-xs">Intent Classification</Badge>
              </div>
            </div>

            <div className="border border-border rounded-lg p-6 hover:border-secondary transition-colors">
              <h3 className="text-lg font-bold mb-2">Loan Decision Engine</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Automated decision engine for credit score predictions and real-time loan approval/rejection decisions.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="text-xs">MLflow</Badge>
                <Badge variant="secondary" className="text-xs">Credit Scoring</Badge>
                <Badge variant="secondary" className="text-xs">Real-time Processing</Badge>
              </div>
            </div>

            <div className="border border-border rounded-lg p-6 hover:border-secondary transition-colors">
              <h3 className="text-lg font-bold mb-2">Model Inference Platform</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Exploring centralized ML model serving infrastructure with registries, versioning, and scalable deployment.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="text-xs">MLflow</Badge>
                <Badge variant="secondary" className="text-xs">Seldon Core</Badge>
                <Badge variant="secondary" className="text-xs">KServe</Badge>
              </div>
            </div>

            <div className="border border-border rounded-lg p-6 hover:border-secondary transition-colors">
              <h3 className="text-lg font-bold mb-2">Drift Detection System</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Comprehensive drift detection with statistical tests, performance monitoring, and automated alerting.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="text-xs">Evidently AI</Badge>
                <Badge variant="secondary" className="text-xs">Statistical Testing</Badge>
                <Badge variant="secondary" className="text-xs">Monitoring</Badge>
              </div>
            </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 sm:py-24 border-t border-border">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold mb-12">Skills</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="font-semibold text-lg mb-4">Technologies</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center"><span className="text-secondary mr-2">•</span>Python, Flask, FastAPI</li>
                <li className="flex items-center"><span className="text-secondary mr-2">•</span>Docker, Kubernetes</li>
                <li className="flex items-center"><span className="text-secondary mr-2">•</span>AWS, GCP, Azure</li>
                <li className="flex items-center"><span className="text-secondary mr-2">•</span>PostgreSQL, Redis</li>
                <li className="flex items-center"><span className="text-secondary mr-2">•</span>Git, GitHub</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">ML/Data Tools</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center"><span className="text-secondary mr-2">•</span>MLflow, Apache Airflow</li>
                <li className="flex items-center"><span className="text-secondary mr-2">•</span>Scikit-learn, TensorFlow</li>
                <li className="flex items-center"><span className="text-secondary mr-2">•</span>DistilBERT, Hugging Face</li>
                <li className="flex items-center"><span className="text-secondary mr-2">•</span>Evidently AI, WhyLabs</li>
                <li className="flex items-center"><span className="text-secondary mr-2">•</span>Power BI, Data Analysis</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-24 border-t border-border">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold mb-12">Get In Touch</h2>
          <div className="max-w-2xl space-y-8">
            <p className="text-lg text-muted-foreground">
              I'm always interested in discussing MLOps, machine learning infrastructure, and building production-ready AI systems. Feel free to reach out.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-secondary text-background hover:bg-secondary/90">
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
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 text-center text-muted-foreground text-sm">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6">
          <p>© 2026 Darachin Kong. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
