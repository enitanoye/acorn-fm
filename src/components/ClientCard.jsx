import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { CheckCircle, Sparkles, Building2, Users } from "lucide-react"

function ClientCard({ clients }) {
    return (
      <Card className="w-full shadow-lg hover:shadow-xl transition-shadow duration-300 border-0 bg-white">
      <CardHeader className="text-center pb-6">
        <div className="mx-auto w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mb-4">
          <Users className="w-8 h-8 text-white" />
        </div>
        <CardTitle className="text-[2rem] tracking-[-.045em] font-bold text-gray-900 mb-2">Our Trusted Clients</CardTitle>
        <CardDescription className="text-[1.2rem] tracking-[-.025em] text-gray-600">
          Proud to serve with leading organizations worldwide
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className="group p-4 rounded-lg border border-gray-200 hover:border-green-300 hover:shadow-md transition-all duration-200 bg-gradient-to-br from-white to-gray-50"
            >
              <div className="flex items-center space-x-3 cursor-pointer">
                <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center group-hover:from-green-200 group-hover:to-green-300 transition-colors duration-200">
                  <Building2 className="w-8 h-8 text-green-600" />
                </div>
                <span className="text-[1.2rem] tracking-[-.025em] font-semibold text-gray-800 group-hover:text-green-700 transition-colors duration-200">
                  {client}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Badge
            variant="outline"
            className="px-6 py-4 text-[1.4rem] tracking-[-.025em] font-semibold border-green-200 text-green-700 hover:bg-green-50"
          >
            {clients.length}+ Happy Clients & Growing
          </Badge>
        </div>
      </CardContent>
    </Card>
    );
  }
  
  export default ClientCard;


 
  