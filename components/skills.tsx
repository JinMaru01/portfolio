const skillCategories = [
  {
    title: "MLOps & DevOps",
    skills: [
      { name: "MLflow", level: 90 },
      { name: "Kubeflow", level: 85 },
      { name: "Docker", level: 92 },
      { name: "Kubernetes", level: 88 },
      { name: "Jenkins", level: 85 },
    ],
  },
  {
    title: "Machine Learning",
    skills: [
      { name: "Python", level: 95 },
      { name: "TensorFlow", level: 88 },
      { name: "PyTorch", level: 82 },
      { name: "Scikit-learn", level: 90 },
      { name: "XGBoost", level: 85 },
    ],
  },
  {
    title: "Cloud & Infrastructure",
    skills: [
      { name: "AWS", level: 88 },
      { name: "Terraform", level: 85 },
      { name: "Apache Airflow", level: 90 },
      { name: "Prometheus", level: 82 },
      { name: "Grafana", level: 80 },
    ],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Technologies and tools I use to build and deploy ML systems at scale
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="space-y-6">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 text-center md:text-left">
                  {category.title}
                </h3>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm sm:text-base font-medium text-gray-700">{skill.name}</span>
                        <span className="text-sm text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
