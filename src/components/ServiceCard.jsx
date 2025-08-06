import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { CheckCircle, Sparkles, Building2, Users } from "lucide-react"

function ServiceCard({ title, items }) {
    return (
      <Card className="w-full max-w-2xl mx-auto shadow-lg hover:shadow-xl transition-shadow duration-300 border-0 bg-white">
      <CardHeader className="text-center pb-4">
        <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-4">
          <Sparkles className="w-8 h-8 text-white" />
        </div>
        <CardTitle className="text-[1.4rem] tracking-[-.045em] font-bold text-gray-900 mb-2">{title}</CardTitle>
        <CardDescription className="text-[1.2rem] tracking-[-.025em] text-gray-600">
          Professional cleaning solutions for your business needs
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6 flex flex-col justify-between">
        <div className="space-y-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 p-4 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 transition-colors duration-200"
            >
              <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0" />
              <span className="text-gray-800 font-semibold text-[1.1rem] tracking-[-.025em]">{item}</span>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Badge
            variant="secondary"
            className="px-6 py-2 text-[1rem] font-semibold bg-blue-100 text-blue-800 hover:bg-blue-200"
          >
            Professional • Reliable • Affordable
          </Badge>
        </div>
      </CardContent>
    </Card>
    );
  }
  
  export default ServiceCard;

