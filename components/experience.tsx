import { Card, CardContent } from "@/components/ui/card"
import { Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    title: "MLOps Engineer",
    company: "Wing Bank PLC",
    location: "Phnom Penh, Cambodia",
    period: "2022 - Present",
    description:
      "Lead MLOps initiatives for Cambodia's leading digital bank, building and maintaining ML infrastructure that serves over 7 million customers. Responsible for model deployment, monitoring, and automation of ML workflows.",
    achievements: [
      "Reduced model deployment time from weeks to hours using automated pipelines",
      "Implemented monitoring system achieving 99.9% model uptime",
      "Built feature store serving 50+ ML models across different business units",
      "Established MLOps best practices and governance frameworks",
    ],
  },
  {
    title: "Data Engineer",
    company: "Wing Bank PLC",
    location: "Phnom Penh, Cambodia",
    period: "2021 - 2022",
    description:
      "Designed and implemented data pipelines and infrastructure to support analytics and machine learning initiatives. Worked closely with data scientists to productionize ML models.",
    achievements: [
      "Built real-time data pipelines processing 1M+ transactions daily",
      "Implemented data quality monitoring reducing data issues by 60%",
      "Migrated legacy systems to cloud-native architecture",
      "Collaborated with ML team to deploy first production models",
    ],
  },
  {
    title: "Software Developer",
    company: "Tech Solutions Co.",
    location: "Phnom Penh, Cambodia",
    period: "2020 - 2021",
    description:
      "Developed web applications and APIs for various clients in the financial services sector. Gained experience in building scalable systems and working with financial data.",
    achievements: [
      "Delivered 10+ client projects using modern web technologies",
      "Implemented secure payment processing systems",
      "Optimized application performance improving response times by 40%",
    ],
  },
]

const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    school: "Royal University of Phnom Penh",
    location: "Phnom Penh, Cambodia",
    period: "2016 - 2020",
    description:
      "Graduated with honors, specializing in software engineering and data structures. Completed thesis on machine learning applications in financial services.",
  },
]

const certifications = [
  {
    title: "AWS Certified Machine Learning - Specialty",
    issuer: "Amazon Web Services",
    period: "2023",
  },
  {
    title: "Certified Kubernetes Administrator (CKA)",
    issuer: "Cloud Native Computing Foundation",
    period: "2022",
  },
  {
    title: "MLOps Engineering Professional Certificate",
    issuer: "Coursera",
    period: "2022",
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Experience</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              My professional journey in MLOps and financial technology
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8 mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Work Experience</h3>

            {experiences.map((exp, index) => (
              <Card key={index} className="relative">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                    <div className="mb-2 sm:mb-0">
                      <h4 className="text-xl font-bold text-gray-900">{exp.title}</h4>
                      <p className="text-lg text-blue-600 font-medium">{exp.company}</p>
                    </div>
                    <div className="flex flex-col sm:text-right text-sm text-gray-500">
                      <div className="flex items-center sm:justify-end mb-1">
                        <Calendar className="w-4 h-4 mr-1" />
                        {exp.period}
                      </div>
                      <div className="flex items-center sm:justify-end">
                        <MapPin className="w-4 h-4 mr-1" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4 leading-relaxed">{exp.description}</p>

                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">Key Achievements:</h5>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="text-gray-600 text-sm flex items-start">
                          <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Education */}
          <div className="space-y-8 mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Education</h3>

            {education.map((edu, index) => (
              <Card key={index}>
                <CardContent className="p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                    <div className="mb-2 sm:mb-0">
                      <h4 className="text-xl font-bold text-gray-900">{edu.degree}</h4>
                      <p className="text-lg text-blue-600 font-medium">{edu.school}</p>
                    </div>
                    <div className="flex flex-col sm:text-right text-sm text-gray-500">
                      <div className="flex items-center sm:justify-end mb-1">
                        <Calendar className="w-4 h-4 mr-1" />
                        {edu.period}
                      </div>
                      <div className="flex items-center sm:justify-end">
                        <MapPin className="w-4 h-4 mr-1" />
                        {edu.location}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 leading-relaxed">{edu.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Certifications */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Certifications</h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h4 className="font-bold text-gray-900 mb-2">{cert.title}</h4>
                    <p className="text-blue-600 font-medium mb-1">{cert.issuer}</p>
                    <p className="text-sm text-gray-500">{cert.period}</p>
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
