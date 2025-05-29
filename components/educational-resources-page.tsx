"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BookOpen, GraduationCap, FileText, Video, Users, Download } from "lucide-react"

export function EducationalResourcesPage() {
  const subjects = [
    {
      name: "Mathematics",
      description: "From basic arithmetic to advanced calculus",
      resources: 245,
      color: "bg-blue-100 dark:bg-blue-900/20",
      icon: "📊",
    },
    {
      name: "Science",
      description: "Biology, Chemistry, Physics, and Earth Sciences",
      resources: 189,
      color: "bg-green-100 dark:bg-green-900/20",
      icon: "🔬",
    },
    {
      name: "Language Arts",
      description: "Reading, Writing, Grammar, and Literature",
      resources: 312,
      color: "bg-purple-100 dark:bg-purple-900/20",
      icon: "📚",
    },
    {
      name: "Social Studies",
      description: "History, Geography, Civics, and Culture",
      resources: 156,
      color: "bg-orange-100 dark:bg-orange-900/20",
      icon: "🌍",
    },
    {
      name: "Arts & Music",
      description: "Visual Arts, Music Theory, and Creative Expression",
      resources: 98,
      color: "bg-pink-100 dark:bg-pink-900/20",
      icon: "🎨",
    },
    {
      name: "Technology",
      description: "Computer Science, Digital Literacy, and Coding",
      resources: 134,
      color: "bg-cyan-100 dark:bg-cyan-900/20",
      icon: "💻",
    },
  ]

  const resourceTypes = [
    {
      icon: BookOpen,
      title: "Textbooks",
      description: "Comprehensive curriculum-aligned textbooks",
      count: "500+",
    },
    {
      icon: FileText,
      title: "Worksheets",
      description: "Printable exercises and practice materials",
      count: "1,200+",
    },
    {
      icon: Video,
      title: "Video Lessons",
      description: "Interactive video content and tutorials",
      count: "300+",
    },
    {
      icon: Users,
      title: "Teacher Guides",
      description: "Lesson plans and teaching resources",
      count: "800+",
    },
  ]

  const gradeLevels = [
    { level: "Foundation Phase", grades: "Grades R-3", age: "Ages 5-9" },
    { level: "Intermediate Phase", grades: "Grades 4-6", age: "Ages 9-12" },
    { level: "Senior Phase", grades: "Grades 7-9", age: "Ages 12-15" },
    { level: "FET Phase", grades: "Grades 10-12", age: "Ages 15-18" },
  ]

  const featuredResources = [
    {
      title: "Complete Mathematics Workbook Grade 7",
      subject: "Mathematics",
      type: "Textbook",
      grade: "Grade 7",
      rating: 4.8,
      downloads: 1250,
    },
    {
      title: "Science Experiment Guide",
      subject: "Science",
      type: "Activity Book",
      grade: "Grades 4-6",
      rating: 4.9,
      downloads: 890,
    },
    {
      title: "English Literature Analysis",
      subject: "Language Arts",
      type: "Study Guide",
      grade: "Grades 10-12",
      rating: 4.7,
      downloads: 675,
    },
    {
      title: "World History Timeline",
      subject: "Social Studies",
      type: "Reference",
      grade: "Grades 8-12",
      rating: 4.6,
      downloads: 543,
    },
  ]

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Educational Resources</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive educational materials aligned with the South African curriculum. Supporting teachers and
            students with quality resources for effective learning.
          </p>
        </div>

        {/* Resource Types */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {resourceTypes.map((type, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <type.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{type.title}</CardTitle>
                <CardDescription>{type.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Badge variant="secondary" className="text-lg font-semibold">
                  {type.count}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Subjects */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Browse by Subject</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subjects.map((subject, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <div className={`h-2 ${subject.color}`}></div>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{subject.icon}</span>
                    <div>
                      <CardTitle className="text-xl">{subject.name}</CardTitle>
                      <CardDescription>{subject.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{subject.resources} resources</span>
                    <Button variant="outline" size="sm">
                      Explore
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Grade Levels */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center">
              <GraduationCap className="h-6 w-6 mr-2 text-primary" />
              Resources by Grade Level
            </CardTitle>
            <CardDescription>Find age-appropriate educational materials for each phase</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {gradeLevels.map((level, index) => (
                <div key={index} className="text-center p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                  <h3 className="font-semibold mb-2">{level.level}</h3>
                  <p className="text-sm text-muted-foreground mb-1">{level.grades}</p>
                  <p className="text-xs text-muted-foreground mb-3">{level.age}</p>
                  <Button size="sm" variant="outline">
                    View Resources
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Featured Resources */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Featured Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredResources.map((resource, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg mb-2">{resource.title}</CardTitle>
                      <div className="flex flex-wrap gap-2 mb-2">
                        <Badge variant="outline">{resource.subject}</Badge>
                        <Badge variant="secondary">{resource.type}</Badge>
                        <Badge variant="outline">{resource.grade}</Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <span>⭐ {resource.rating}</span>
                      <span>📥 {resource.downloads}</span>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline">
                        <Download className="h-4 w-4 mr-1" />
                        Download
                      </Button>
                      <Button size="sm">View</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* For Educators */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>For Educators</CardTitle>
            <CardDescription>Special resources and tools designed specifically for teachers</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 border rounded-lg">
                <FileText className="h-8 w-8 mx-auto mb-3 text-primary" />
                <h3 className="font-semibold mb-2">Lesson Plans</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Ready-to-use lesson plans aligned with curriculum standards
                </p>
                <Button size="sm">Browse Plans</Button>
              </div>

              <div className="text-center p-4 border rounded-lg">
                <Users className="h-8 w-8 mx-auto mb-3 text-primary" />
                <h3 className="font-semibold mb-2">Teacher Community</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Connect with other educators and share teaching strategies
                </p>
                <Button size="sm">Join Community</Button>
              </div>

              <div className="text-center p-4 border rounded-lg">
                <Download className="h-8 w-8 mx-auto mb-3 text-primary" />
                <h3 className="font-semibold mb-2">Bulk Downloads</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Download multiple resources at once for classroom use
                </p>
                <Button size="sm">Get Access</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card>
          <CardHeader>
            <CardTitle>Need Help Finding Resources?</CardTitle>
            <CardDescription>Our education specialists are here to help you find the perfect materials</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="flex-1">Contact Education Specialist</Button>
              <Button variant="outline" className="flex-1">
                Request Custom Resources
              </Button>
              <Button variant="outline" className="flex-1">
                Browse All Resources
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
