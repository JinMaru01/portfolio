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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3Ccircle cx='53' cy='7' r='1'/%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3Ccircle cx='7' cy='53' r='1'/%3E%3Ccircle cx='53' cy='53' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Neural Network Background Elements */}
      <div className="absolute inset-0 opacity-10">
        {/* Top Left Network */}
        <svg className="absolute top-10 left-10 w-32 h-32 text-blue-600" viewBox="0 0 100 100">
          <circle cx="20" cy="20" r="2" fill="currentColor" />
          <circle cx="50" cy="30" r="2" fill="currentColor" />
          <circle cx="80" cy="20" r="2" fill="currentColor" />
          <circle cx="35" cy="60" r="2" fill="currentColor" />
          <circle cx="65" cy="70" r="2" fill="currentColor" />
          <line x1="20" y1="20" x2="50" y2="30" stroke="currentColor" strokeWidth="0.5" />
          <line x1="50" y1="30" x2="80" y2="20" stroke="currentColor" strokeWidth="0.5" />
          <line x1="20" y1="20" x2="35" y2="60" stroke="currentColor" strokeWidth="0.5" />
          <line x1="50" y1="30" x2="35" y2="60" stroke="currentColor" strokeWidth="0.5" />
          <line x1="50" y1="30" x2="65" y2="70" stroke="currentColor" strokeWidth="0.5" />
          <line x1="80" y1="20" x2="65" y2="70" stroke="currentColor" strokeWidth="0.5" />
        </svg>

        {/* Top Right Data Flow */}
        <svg className="absolute top-20 right-20 w-40 h-24 text-indigo-600" viewBox="0 0 120 60">
          <rect x="10" y="20" width="15" height="8" rx="2" fill="currentColor" opacity="0.6" />
          <rect x="35" y="15" width="15" height="8" rx="2" fill="currentColor" opacity="0.7" />
          <rect x="35" y="25" width="15" height="8" rx="2" fill="currentColor" opacity="0.5" />
          <rect x="60" y="20" width="15" height="8" rx="2" fill="currentColor" opacity="0.8" />
          <rect x="85" y="20" width="15" height="8" rx="2" fill="currentColor" opacity="0.6" />

          <path d="M25 24 L35 19" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.4" />
          <path d="M25 24 L35 29" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.4" />
          <path d="M50 19 L60 24" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.4" />
          <path d="M50 29 L60 24" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.4" />
          <path d="M75 24 L85 24" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.4" />
        </svg>

        {/* Bottom Left Pipeline */}
        <svg className="absolute bottom-32 left-16 w-36 h-20 text-blue-500" viewBox="0 0 120 50">
          <circle cx="15" cy="25" r="6" fill="currentColor" opacity="0.3" />
          <circle cx="45" cy="25" r="6" fill="currentColor" opacity="0.4" />
          <circle cx="75" cy="25" r="6" fill="currentColor" opacity="0.5" />
          <circle cx="105" cy="25" r="6" fill="currentColor" opacity="0.6" />

          <path d="M21 25 L39 25" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.3" />
          <path d="M51 25 L69 25" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.3" />
          <path d="M81 25 L99 25" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.3" />

          <polygon points="37,23 37,27 41,25" fill="currentColor" opacity="0.3" />
          <polygon points="67,23 67,27 71,25" fill="currentColor" opacity="0.3" />
          <polygon points="97,23 97,27 101,25" fill="currentColor" opacity="0.3" />
        </svg>

        {/* Bottom Right Model Architecture */}
        <svg className="absolute bottom-20 right-12 w-32 h-32 text-indigo-500" viewBox="0 0 100 100">
          <rect x="10" y="10" width="80" height="8" rx="4" fill="currentColor" opacity="0.2" />
          <rect x="15" y="25" width="70" height="8" rx="4" fill="currentColor" opacity="0.3" />
          <rect x="20" y="40" width="60" height="8" rx="4" fill="currentColor" opacity="0.4" />
          <rect x="25" y="55" width="50" height="8" rx="4" fill="currentColor" opacity="0.5" />
          <rect x="30" y="70" width="40" height="8" rx="4" fill="currentColor" opacity="0.6" />
          <rect x="40" y="85" width="20" height="8" rx="4" fill="currentColor" opacity="0.7" />
        </svg>
      </div>

      {/* Floating Code Elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 text-xs font-mono text-gray-600 transform -rotate-12">
          {"model.fit(X_train, y_train)"}
        </div>
        <div className="absolute top-1/3 right-1/4 text-xs font-mono text-gray-600 transform rotate-6">
          {"kubectl apply -f deployment.yaml"}
        </div>
        <div className="absolute bottom-1/3 left-1/3 text-xs font-mono text-gray-600 transform rotate-3">
          {'mlflow.log_metric("accuracy", 0.95)'}
        </div>
        <div className="absolute bottom-1/4 right-1/3 text-xs font-mono text-gray-600 transform -rotate-6">
          {"docker build -t ml-model:latest ."}
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Code className="h-6 w-6" />
              <span className="font-bold text-sm sm:text-base">Darachin Kong</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
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

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="sm" className="md:hidden">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container px-4 py-16 sm:py-24 md:py-32">
        <div className="flex flex-col items-center text-center space-y-6 sm:space-y-8">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              Darachin Kong
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 text-base sm:text-lg md:text-xl px-4">
              MLOps Engineer at Wing Bank. Currently exploring centralized ML model inference, drift detection, and
              automated retraining systems. Specializing in production-ready ML operations and intelligent financial
              services solutions.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a href="mailto:rachinkong@gmail.com" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="w-full sm:w-auto">
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </Button>
            </a>
            <a href="https://github.com/JinMaru01" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="w-full sm:w-auto bg-transparent">
                <Github className="mr-2 h-4 w-4" />
                View GitHub
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container px-4 py-12 sm:py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter mb-6 sm:mb-8">About Me</h2>
          <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                I'm a passionate MLOps Engineer currently working at Wing Bank in Cambodia with hands-on experience in
                developing ML-powered solutions for financial services. Currently exploring advanced MLOps tools for
                centralized machine learning model inference, automated drift detection, and model retraining systems to
                ensure robust production ML operations.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                My expertise includes API development with Flask, MLflow for experiment tracking, and developing NLP
                solutions using pretrained models like DistilBERT. I'm passionate about building resilient, self-healing
                ML systems that maintain performance and accuracy in production environments.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg sm:text-xl font-semibold">Core Competencies</h3>
              <ul className="space-y-2 text-gray-600 text-sm sm:text-base">
                <li className="flex items-center">
                  <Zap className="mr-2 h-4 w-4 text-blue-500 flex-shrink-0" />
                  ML Pipeline Automation
                </li>
                <li className="flex items-center">
                  <Cloud className="mr-2 h-4 w-4 text-blue-500 flex-shrink-0" />
                  Cloud Infrastructure (AWS, GCP, Azure)
                </li>
                <li className="flex items-center">
                  <Server className="mr-2 h-4 w-4 text-blue-500 flex-shrink-0" />
                  Container Orchestration (Docker, Kubernetes)
                </li>
                <li className="flex items-center">
                  <Monitor className="mr-2 h-4 w-4 text-blue-500 flex-shrink-0" />
                  Model Monitoring & Observability
                </li>
                <li className="flex items-center">
                  <Shield className="mr-2 h-4 w-4 text-blue-500 flex-shrink-0" />
                  CI/CD for ML Systems
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Current Focus Section */}
      <section className="container px-4 py-12 sm:py-16 bg-gradient-to-r from-blue-50/80 via-indigo-50/80 to-purple-50/80 backdrop-blur-sm relative">
        {/* Section-specific background pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="absolute top-4 right-4 w-24 h-24 text-blue-600" viewBox="0 0 100 100">
            <circle cx="50" cy="20" r="3" fill="currentColor" />
            <circle cx="20" cy="50" r="3" fill="currentColor" />
            <circle cx="80" cy="50" r="3" fill="currentColor" />
            <circle cx="50" cy="80" r="3" fill="currentColor" />
            <line x1="50" y1="20" x2="20" y2="50" stroke="currentColor" strokeWidth="1" />
            <line x1="50" y1="20" x2="80" y2="50" stroke="currentColor" strokeWidth="1" />
            <line x1="20" y1="50" x2="50" y2="80" stroke="currentColor" strokeWidth="1" />
            <line x1="80" y1="50" x2="50" y2="80" stroke="currentColor" strokeWidth="1" />
          </svg>
        </div>
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter mb-6 sm:mb-8 text-center">
            Current Focus & Research
          </h2>
          <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
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
      <section id="experience" className="container px-4 py-12 sm:py-16 bg-white/90 backdrop-blur-sm relative">
        {/* Subtle grid pattern for experience section */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fillOpacity='0.05'%3E%3Cpath d='M0 0h40v40H0V0zm20 20h20v20H20V20z'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter mb-6 sm:mb-8">Experience</h2>
          <div className="space-y-6 sm:space-y-8">
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
      <section id="projects" className="container px-4 py-12 sm:py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter mb-6 sm:mb-8">Featured Projects</h2>
          <div className="grid gap-4 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
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
      <section id="skills" className="container px-4 py-12 sm:py-16 bg-white">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter mb-6 sm:mb-8">Technical Skills</h2>
          <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
      <section id="contact" className="container px-4 py-12 sm:py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter mb-6 sm:mb-8">Get In Touch</h2>
          <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base px-4">
            I'm always interested in discussing new opportunities, innovative projects, or just chatting about the
            latest in MLOps and machine learning infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="mailto:rachinkong@gmail.com" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="w-full sm:w-auto">
                <Mail className="mr-2 h-4 w-4" />
                Email Me
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/jinmaruhhh" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="w-full sm:w-auto bg-transparent">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </Button>
            </a>
            <a href="https://github.com/JinMaru01" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="w-full sm:w-auto bg-transparent">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Button>
            </a>
          </div>
        </div>

      </section>

      {/* Footer */}
      <footer className="border-t py-6 sm:py-8">
        <div className="container px-4 text-center text-gray-600 text-sm sm:text-base">
          <p>&copy; 2024 Darachin Kong. MLOps Engineer Portfolio.</p>
        </div>
      </footer>
    </div>
  )
}
