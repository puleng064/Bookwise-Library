"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { GraduationCap, FileText, Users, Calendar, BookOpen, Download, Star, Clock } from "lucide-react"

export function TeacherResourcesPage() {
  const resourceCategories = [
    {
      title: "Lesson Plans",
      description: "Complete lesson plans with objectives, activities, and assessments",
      count: 450,
      icon: FileText,
    },
    {
      title: "Assessment Tools",
      description: "Rubrics, tests, and evaluation materials",
      count: 280,
      icon: GraduationCap,
    },
    {
      title: "Classroom Activities",
      description: "Interactive activities and group exercises",
      count: 320,
      icon: Users,
    },
    {
      title: "Curriculum Guides",
      description: "Comprehensive curriculum mapping and pacing guides",
      count: 150,
      icon: BookOpen,
    },
  ]

  const featuredLessonPlans = [
    {
      title: "Introduction to Fractions",
      subject: "Mathematics",
      grade: "Grade 4",
      duration: "45 minutes",
      rating: 4.9,
      downloads: 1250,
      description: "Interactive lesson introducing basic fraction concepts with hands-on activities",
    },
    {
      title: "Photosynthesis Lab Activity",
      subject: "Natural Sciences",
      grade: "Grade 7",
      duration: "60 minutes",
      rating: 4.8,
      downloads: 890,
      description: "Hands-on laboratory experiment exploring how plants make food",
    },
    {
      title: "Creative Writing Workshop",
      subject: "English",
      grade: "Grade 6",
      duration: "90 minutes",
      rating: 4.7,
      downloads: 675,
      description: "Step-by-step guide to teaching creative writing techniques",
    },
  ]

  const professionalDevelopment = [
    {
      title: "Digital Teaching Strategies",
      type: "Online Course",
      duration: "4 weeks",
      level: "Beginner",
      description: "Learn to integrate technology effectively in your classroom",
    },
    {
      title: "Inclusive Education Practices",
      type: "Workshop",
      duration: "2 days",
      level: "Intermediate",
      description: "Strategies for supporting diverse learners in your classroom",
    },
    {
      title: "Assessment and Feedback",
      type: "Webinar Series",
      duration: "6 sessions",
      level: "Advanced",
      description: "Modern approaches to student assessment and meaningful feedback",
    },
  ]

  const teachingTools = [
    {
      name: "Grade Book Template",
      description: "Comprehensive spreadsheet for tracking student progress",
      format: "Excel/Google Sheets",
      downloads: 2340,
    },
    {
      name: "Parent Communication Kit",
      description: "Templates for newsletters, progress reports, and meeting notes",
      format: "Word/PDF",
      downloads: 1890,
    },
    {
      name: "Classroom Management Toolkit",
      description: "Behavior charts, reward systems, and classroom rules templates",
      format: "PDF/Printable",
      downloads: 1560,
    },
    {
      name: "Lesson Planning Template",
      description: "Structured template for creating detailed lesson plans",
      format: "Word/PDF",
      downloads: 2100,
    },
  ]

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Teacher Resources</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive teaching materials, lesson plans, and professional development resources to support educators
            in creating engaging and effective learning experiences.
          </p>
        </div>

        {/* Resource Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {resourceCategories.map((category, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <category.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{category.title}</CardTitle>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Badge variant="secondary" className="text-lg font-semibold">
                  {category.count}+ Resources
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="lesson-plans" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="lesson-plans">Lesson Plans</TabsTrigger>
            <TabsTrigger value="tools">Teaching Tools</TabsTrigger>
            <TabsTrigger value="development">Professional Development</TabsTrigger>
            <TabsTrigger value="community">Teacher Community</TabsTrigger>
          </TabsList>

          {/* Lesson Plans Tab */}
          <TabsContent value="lesson-plans">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Featured Lesson Plans</CardTitle>
                  <CardDescription>
                    High-quality, curriculum-aligned lesson plans ready for your classroom
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {featuredLessonPlans.map((plan, index) => (
                      <div key={index} className="border rounded-lg p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
                            <div className="flex flex-wrap gap-2 mb-2">
                              <Badge variant="outline">{plan.subject}</Badge>
                              <Badge variant="secondary">{plan.grade}</Badge>
                              <Badge variant="outline">
                                <Clock className="h-3 w-3 mr-1" />
                                {plan.duration}
                              </Badge>
                            </div>
                            <p className="text-muted-foreground">{plan.description}</p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <span className="flex items-center">
                              <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                              {plan.rating}
                            </span>
                            <span className="flex items-center">
                              <Download className="h-4 w-4 mr-1" />
                              {plan.downloads}
                            </span>
                          </div>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">
                              Preview
                            </Button>
                            <Button size="sm">
                              <Download className="h-4 w-4 mr-1" />
                              Download
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Teaching Tools Tab */}
          <TabsContent value="tools">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Essential Teaching Tools</CardTitle>
                  <CardDescription>Templates and tools to streamline your teaching workflow</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {teachingTools.map((tool, index) => (
                      <div key={index} className="border rounded-lg p-4">
                        <h3 className="font-semibold mb-2">{tool.name}</h3>
                        <p className="text-muted-foreground text-sm mb-3">{tool.description}</p>
                        <div className="flex items-center justify-between">
                          <div className="text-sm text-muted-foreground">
                            <span className="block">{tool.format}</span>
                            <span>{tool.downloads} downloads</span>
                          </div>
                          <Button size="sm" variant="outline">
                            <Download className="h-4 w-4 mr-1" />
                            Download
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Professional Development Tab */}
          <TabsContent value="development">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Professional Development Opportunities</CardTitle>
                  <CardDescription>
                    Enhance your teaching skills with our professional development programs
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {professionalDevelopment.map((program, index) => (
                      <div key={index} className="border rounded-lg p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
                            <div className="flex flex-wrap gap-2 mb-2">
                              <Badge variant="outline">{program.type}</Badge>
                              <Badge variant="secondary">{program.duration}</Badge>
                              <Badge variant="outline">{program.level}</Badge>
                            </div>
                            <p className="text-muted-foreground">{program.description}</p>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            Learn More
                          </Button>
                          <Button size="sm">Enroll Now</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Teacher Community Tab */}
          <TabsContent value="community">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Join the Teacher Community</CardTitle>
                  <CardDescription>Connect, collaborate, and share with fellow educators</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="text-center p-6 border rounded-lg">
                      <Users className="h-12 w-12 mx-auto mb-4 text-primary" />
                      <h3 className="font-semibold mb-2">Discussion Forums</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Share ideas, ask questions, and get advice from experienced teachers
                      </p>
                      <Button size="sm">Join Forums</Button>
                    </div>

                    <div className="text-center p-6 border rounded-lg">
                      <Calendar className="h-12 w-12 mx-auto mb-4 text-primary" />
                      <h3 className="font-semibold mb-2">Virtual Meetups</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Attend monthly virtual meetups and networking sessions
                      </p>
                      <Button size="sm">View Schedule</Button>
                    </div>

                    <div className="text-center p-6 border rounded-lg">
                      <FileText className="h-12 w-12 mx-auto mb-4 text-primary" />
                      <h3 className="font-semibold mb-2">Resource Sharing</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Share your own resources and discover materials from other teachers
                      </p>
                      <Button size="sm">Share Resources</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Teacher Spotlight</CardTitle>
                  <CardDescription>Celebrating outstanding educators in our community</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border rounded-lg p-4">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                          <span className="font-semibold text-primary">MJ</span>
                        </div>
                        <div>
                          <h4 className="font-semibold">Ms. Jennifer Smith</h4>
                          <p className="text-sm text-muted-foreground">Grade 5 Mathematics Teacher</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        "The lesson plans and resources available here have transformed my teaching. My students are
                        more engaged than ever!"
                      </p>
                    </div>

                    <div className="border rounded-lg p-4">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                          <span className="font-semibold text-primary">DM</span>
                        </div>
                        <div>
                          <h4 className="font-semibold">Mr. David Miller</h4>
                          <p className="text-sm text-muted-foreground">High School Science Teacher</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        "The professional development courses helped me integrate technology seamlessly into my science
                        classes."
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Call to Action */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle>Ready to Enhance Your Teaching?</CardTitle>
            <CardDescription>Join thousands of educators who are already using our resources</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="flex-1">Browse All Resources</Button>
              <Button variant="outline" className="flex-1">
                Join Teacher Community
              </Button>
              <Button variant="outline" className="flex-1">
                Contact Education Specialist
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
