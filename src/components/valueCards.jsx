import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { Shield, Zap, Award, HardHat, Lightbulb, CheckCircle2, ArrowRight } from "lucide-react"

export default function ValuesCards() {
  const values = [
    {
      title: "Integrity",
      icon: Shield,
      description:
        "We conduct our business with unwavering honesty, transparency, and ethical standards. Every decision we make is guided by moral principles and accountability to our clients and community.",
      color: "blue",
      gradient: "from-blue-500 to-blue-600",
      bgGradient: "from-blue-50 to-indigo-50",
      hoverBg: "hover:from-blue-100 hover:to-indigo-100",
      textColor: "text-blue-600",
      borderColor: "border-blue-200",
    },
    {
      title: "Efficiency",
      icon: Zap,
      description:
        "We optimize our processes and resources to deliver maximum value in minimum time. Our streamlined operations ensure cost-effective solutions without compromising quality.",
      color: "amber",
      gradient: "from-amber-500 to-orange-500",
      bgGradient: "from-amber-50 to-orange-50",
      hoverBg: "hover:from-amber-100 hover:to-orange-100",
      textColor: "text-amber-600",
      borderColor: "border-amber-200",
    },
    {
      title: "Excellence",
      icon: Award,
      description:
        "We strive for perfection in every task, continuously improving our services and exceeding expectations. Excellence is not just our goal—it's our standard.",
      color: "purple",
      gradient: "from-purple-500 to-purple-600",
      bgGradient: "from-purple-50 to-violet-50",
      hoverBg: "hover:from-purple-100 hover:to-violet-100",
      textColor: "text-purple-600",
      borderColor: "border-purple-200",
    },
    {
      title: "Safety",
      icon: HardHat,
      description:
        "The wellbeing of our team, clients, and community is paramount. We implement rigorous safety protocols and maintain the highest standards of workplace security.",
      color: "red",
      gradient: "from-red-500 to-red-600",
      bgGradient: "from-red-50 to-rose-50",
      hoverBg: "hover:from-red-100 hover:to-rose-100",
      textColor: "text-red-600",
      borderColor: "border-red-200",
    },
    {
      title: "Innovation",
      icon: Lightbulb,
      description:
        "We embrace cutting-edge technologies and creative solutions to stay ahead of industry trends. Innovation drives our continuous evolution and service enhancement.",
      color: "green",
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50",
      hoverBg: "hover:from-green-100 hover:to-emerald-100",
      textColor: "text-green-600",
      borderColor: "border-green-200",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <Badge className="mb-4 px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 border-0">
            Our Foundation
          </Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Core Values</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            These fundamental principles guide every aspect of our business, shaping how we serve our clients and build
            lasting relationships.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => {
            const IconComponent = value.icon
            return (
              <Card
                key={index}
                className={`group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br ${value.bgGradient} ${value.hoverBg}`}
              >
                {/* Decorative Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                  <IconComponent className="w-full h-full" />
                </div>

                <CardHeader className="pb-4">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors">
                    {value.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="pt-0">
                  <CardDescription className="text-gray-700 text-base leading-relaxed mb-6">
                    {value.description}
                  </CardDescription>

                  <div className="flex items-center text-sm font-semibold text-gray-600 group-hover:text-gray-800 transition-colors">
                    <CheckCircle2 className={`w-4 h-4 mr-2 ${value.textColor}`} />
                    Core Principle
                  </div>
                </CardContent>

                {/* Hover Effect Border */}
                <div
                  className={`absolute inset-0 border-2 ${value.borderColor} rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                ></div>
              </Card>
            )
          })}
        </div>

        {/* Description Art Section */}
        <div className="bg-white rounded-3xl shadow-xl p-12 border border-gray-100">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Values in Action</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See how our core values translate into real-world impact and exceptional service delivery
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Visual Art */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 via-purple-50 to-green-100 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="relative w-full h-full">
                  {/* Central Hub */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-sm">VALUES</span>
                  </div>

                  {/* Value Orbits */}
                  {values.map((value, index) => {
                    const IconComponent = value.icon
                    const angle = index * 72 * (Math.PI / 180) // 360/5 = 72 degrees
                    const radius = 120
                    const x = Math.cos(angle) * radius
                    const y = Math.sin(angle) * radius

                    return (
                      <div
                        key={index}
                        className={`absolute w-16 h-16 bg-gradient-to-br ${value.gradient} rounded-full flex items-center justify-center shadow-lg transform transition-transform hover:scale-110`}
                        style={{
                          left: `calc(50% + ${x}px - 2rem)`,
                          top: `calc(50% + ${y}px - 2rem)`,
                        }}
                      >
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                    )
                  })}

                  {/* Connecting Lines */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none">
                    {values.map((_, index) => {
                      const angle = index * 72 * (Math.PI / 180)
                      const radius = 120
                      const x1 = 50 + (Math.cos(angle) * radius) / 4 // Percentage from center
                      const y1 = 50 + (Math.sin(angle) * radius) / 4
                      const x2 = 50 + (Math.cos(angle) * (radius - 40)) / 4
                      const y2 = 50 + (Math.sin(angle) * (radius - 40)) / 4

                      return (
                        <line
                          key={index}
                          x1={`${x1}%`}
                          y1={`${y1}%`}
                          x2={`${x2}%`}
                          y2={`${y2}%`}
                          stroke="#e5e7eb"
                          strokeWidth="2"
                          strokeDasharray="5,5"
                          className="animate-pulse"
                        />
                      )
                    })}
                  </svg>
                </div>
              </div>
            </div>

            {/* Right Side - Impact Details */}
            <div className="space-y-8">
              <div className="space-y-6">
                {values.slice(0, 3).map((value, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
                  >
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-br ${value.gradient} flex items-center justify-center flex-shrink-0`}
                    >
                      <value.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{value.title} Impact</h3>
                      <p className="text-sm text-gray-600">
                        {value.title === "Integrity" &&
                          "Building trust through transparent communication and ethical business practices."}
                        {value.title === "Efficiency" &&
                          "Delivering faster results while maintaining quality and reducing costs."}
                        {value.title === "Excellence" &&
                          "Consistently exceeding client expectations and industry standards."}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-gray-200">
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>Values-Driven Results</span>
                  <div className="flex items-center space-x-2">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Badge className="mb-4 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 text-base">
            Experience Our Values
          </Badge>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to work with a team that puts these values into practice every day? Let's discuss how we can serve
            you.
          </p>
        </div>
      </div>
    </div>
  )
}
