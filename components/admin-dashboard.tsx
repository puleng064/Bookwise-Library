"use client"

import { CardFooter } from "@/components/ui/card"
import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Users, BookOpen, DollarSign, TrendingUp, Plus, Edit, Trash2, AlertTriangle } from "lucide-react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "@/components/ui/use-toast"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"

export function AdminDashboard() {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalBooks: 0,
    totalOwed: 0,
    recentBorrowings: 0,
    genderStats: {},
  })

  const [users, setUsers] = useState([])
  const [books, setBooks] = useState([])
  const [borrowingHistory, setBorrowingHistory] = useState([])

  // Add modal state and functions for adding a new user
  const [showAddUserModal, setShowAddUserModal] = useState(false)
  const [newUser, setNewUser] = useState({
    username: "",
    email: "",
    gender: "male",
  })

  // Add modal state and functions for editing a user
  const [showEditUserModal, setShowEditUserModal] = useState(false)
  const [editingUser, setEditingUser] = useState(null)

  // Add state for delete confirmation
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)
  const [userToDelete, setUserToDelete] = useState(null)

  // Add modal state and functions for adding a new book
  const [showAddBookModal, setShowAddBookModal] = useState(false)
  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    genre: "",
    price: 0,
    totalCopies: 0,
  })

  useEffect(() => {
    fetchAdminStats()
    fetchUsers()
    fetchBooks()
    fetchBorrowingHistory()
  }, [])

  const fetchAdminStats = async () => {
    // Simulated admin statistics
    setStats({
      totalUsers: 8,
      totalBooks: 1247,
      totalOwed: 2450.75,
      recentBorrowings: 89,
      genderStats: {
        male: 3,
        female: 4,
        other: 1,
      },
    })
  }

  // Update the users array to show more realistic registered users
  const fetchUsers = async () => {
    // Simulated registered user data
    setUsers([
      {
        id: 1,
        username: "michael_johnson",
        email: "michael.johnson@gmail.com",
        gender: "male",
        totalOwed: 0,
        booksCount: 2,
        joinDate: new Date().toISOString().split("T")[0], // Today
      },
      {
        id: 2,
        username: "sarah_williams",
        email: "sarah.williams@gmail.com",
        gender: "female",
        totalOwed: 75.5,
        booksCount: 3,
        joinDate: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString().split("T")[0], // 3 days ago
      },
      {
        id: 3,
        username: "david_brown",
        email: "david.brown@gmail.com",
        gender: "male",
        totalOwed: 0,
        booksCount: 1,
        joinDate: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString().split("T")[0], // 7 days ago
      },
      {
        id: 4,
        username: "emily_davis",
        email: "emily.davis@gmail.com",
        gender: "female",
        totalOwed: 45.25,
        booksCount: 4,
        joinDate: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString().split("T")[0], // 10 days ago
      },
      {
        id: 5,
        username: "james_wilson",
        email: "james.wilson@gmail.com",
        gender: "male",
        totalOwed: 0,
        booksCount: 0,
        joinDate: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString().split("T")[0], // 14 days ago
      },
      {
        id: 6,
        username: "olivia_taylor",
        email: "olivia.taylor@gmail.com",
        gender: "female",
        totalOwed: 0,
        booksCount: 2,
        joinDate: new Date(Date.now() - 21 * 24 * 60 * 60 * 1000).toISOString().split("T")[0], // 21 days ago
      },
      {
        id: 7,
        username: "sophia_martinez",
        email: "sophia.martinez@gmail.com",
        gender: "female",
        totalOwed: 30.0,
        booksCount: 1,
        joinDate: new Date(Date.now() - 25 * 24 * 60 * 60 * 1000).toISOString().split("T")[0], // 25 days ago
      },
      {
        id: 8,
        username: "alex_nonbinary",
        email: "alex.nonbinary@gmail.com",
        gender: "other",
        totalOwed: 0,
        booksCount: 5,
        joinDate: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split("T")[0], // 30 days ago
      },
    ])
  }

  const fetchBooks = async () => {
    // Simulated book data
    setBooks([
      {
        id: 1,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        genre: "Fiction",
        price: 299.99,
        totalCopies: 5,
        availableCopies: 2,
        isNewArrival: false,
      },
      {
        id: 2,
        title: "Atomic Habits",
        author: "James Clear",
        genre: "Self-Help",
        price: 399.99,
        totalCopies: 3,
        availableCopies: 3,
        isNewArrival: true,
      },
      {
        id: 3,
        title: "The Seven Husbands of Evelyn Hugo",
        author: "Taylor Jenkins Reid",
        genre: "Fiction",
        price: 349.99,
        totalCopies: 4,
        availableCopies: 1,
        isNewArrival: true,
      },
    ])
  }

  const fetchBorrowingHistory = async () => {
    // Simulated borrowing history
    setBorrowingHistory([
      {
        id: 1,
        userName: "michael_johnson",
        bookTitle: "The Great Gatsby",
        borrowedDate: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
        dueDate: new Date(Date.now() + 9 * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
        status: "borrowed",
      },
      {
        id: 2,
        userName: "sarah_williams",
        bookTitle: "Atomic Habits",
        borrowedDate: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
        dueDate: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
        status: "borrowed",
      },
      {
        id: 3,
        userName: "emily_davis",
        bookTitle: "1984",
        borrowedDate: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
        dueDate: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
        status: "overdue",
      },
    ])
  }

  const handleAddUser = () => {
    // Add validation logic here
    if (!newUser.username || !newUser.email) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      })
      return
    }

    const newId = users.length > 0 ? Math.max(...users.map((user) => user.id)) + 1 : 1
    const userToAdd = {
      id: newId,
      username: newUser.username,
      email: newUser.email,
      gender: newUser.gender,
      totalOwed: 0,
      booksCount: 0,
      joinDate: new Date().toISOString().split("T")[0],
    }

    setUsers([...users, userToAdd])
    setShowAddUserModal(false)
    setNewUser({ username: "", email: "", gender: "male" })

    // Update stats
    setStats((prev) => ({
      ...prev,
      totalUsers: prev.totalUsers + 1,
      genderStats: {
        ...prev.genderStats,
        [newUser.gender]: (prev.genderStats[newUser.gender] || 0) + 1,
      },
    }))

    toast({
      title: "User Added",
      description: `${newUser.username} has been added successfully.`,
    })
  }

  const handleEditUser = () => {
    if (!editingUser.username || !editingUser.email) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      })
      return
    }

    // Update the user in the users array
    const updatedUsers = users.map((user) => (user.id === editingUser.id ? editingUser : user))

    setUsers(updatedUsers)
    setShowEditUserModal(false)
    setEditingUser(null)

    toast({
      title: "User Updated",
      description: `${editingUser.username} has been updated successfully.`,
    })
  }

  const handleDeleteUser = () => {
    if (!userToDelete) return

    // Remove the user from the users array
    const updatedUsers = users.filter((user) => user.id !== userToDelete.id)
    setUsers(updatedUsers)

    // Update stats
    setStats((prev) => ({
      ...prev,
      totalUsers: prev.totalUsers - 1,
      genderStats: {
        ...prev.genderStats,
        [userToDelete.gender]: (prev.genderStats[userToDelete.gender] || 0) - 1,
      },
    }))

    setShowDeleteConfirm(false)
    setUserToDelete(null)

    toast({
      title: "User Deleted",
      description: `${userToDelete.username} has been deleted successfully.`,
    })
  }

  const handleAddBook = () => {
    // Add validation logic here
    if (!newBook.title || !newBook.author || !newBook.genre || newBook.price <= 0 || newBook.totalCopies <= 0) {
      toast({
        title: "Error",
        description: "Please fill in all required fields with valid values",
        variant: "destructive",
      })
      return
    }

    const newId = books.length > 0 ? Math.max(...books.map((book) => book.id)) + 1 : 1
    const bookToAdd = {
      id: newId,
      title: newBook.title,
      author: newBook.author,
      genre: newBook.genre,
      price: Number.parseFloat(newBook.price.toString()),
      totalCopies: Number.parseInt(newBook.totalCopies.toString()),
      availableCopies: Number.parseInt(newBook.totalCopies.toString()),
      isNewArrival: true,
    }

    setBooks([...books, bookToAdd])
    setShowAddBookModal(false)
    setNewBook({ title: "", author: "", genre: "", price: 0, totalCopies: 0 })

    // Update stats
    setStats((prev) => ({
      ...prev,
      totalBooks: prev.totalBooks + Number.parseInt(newBook.totalCopies.toString()),
    }))

    toast({
      title: "Book Added",
      description: `${newBook.title} has been added successfully.`,
    })
  }

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Admin Dashboard</h1>
          <p className="text-muted-foreground">Manage your library system, users, and books.</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Users</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalUsers}</div>
              <p className="text-xs text-muted-foreground">+3 from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Books</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalBooks}</div>
              <p className="text-xs text-muted-foreground">+23 new arrivals</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Owed</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">ZAR {stats.totalOwed.toFixed(2)}</div>
              <p className="text-xs text-muted-foreground">Outstanding fines</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Recent Borrowings</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.recentBorrowings}</div>
              <p className="text-xs text-muted-foreground">This month</p>
            </CardContent>
          </Card>
        </div>

        {/* Gender Distribution */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>User Demographics</CardTitle>
            <CardDescription>Gender distribution of registered users</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">{stats.genderStats.male}</div>
                <p className="text-sm text-muted-foreground">Male</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-pink-600">{stats.genderStats.female}</div>
                <p className="text-sm text-muted-foreground">Female</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">{stats.genderStats.other}</div>
                <p className="text-sm text-muted-foreground">Other</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Management Tabs */}
        <Tabs defaultValue="users" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="users">User Management</TabsTrigger>
            <TabsTrigger value="books">Book Management</TabsTrigger>
            <TabsTrigger value="borrowing">Borrowing History</TabsTrigger>
          </TabsList>

          {/* User Management */}
          <TabsContent value="users">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>User Management</CardTitle>
                  <CardDescription>Manage registered users and their accounts</CardDescription>
                </div>
                <Button onClick={() => setShowAddUserModal(true)}>
                  <Plus className="h-4 w-4 mr-2" />
                  Add User
                </Button>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Username</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Gender</TableHead>
                      <TableHead>Books Borrowed</TableHead>
                      <TableHead>Amount Owed</TableHead>
                      <TableHead>Join Date</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {users.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell className="font-medium">{user.username}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>
                          <Badge variant="outline">{user.gender}</Badge>
                        </TableCell>
                        <TableCell>{user.booksCount}</TableCell>
                        <TableCell className={user.totalOwed > 0 ? "text-destructive font-medium" : ""}>
                          ZAR {user.totalOwed.toFixed(2)}
                        </TableCell>
                        <TableCell>{new Date(user.joinDate).toLocaleDateString()}</TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => {
                                setEditingUser({ ...user })
                                setShowEditUserModal(true)
                              }}
                            >
                              <Edit className="h-3 w-3" />
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => {
                                setUserToDelete(user)
                                setShowDeleteConfirm(true)
                              }}
                            >
                              <Trash2 className="h-3 w-3" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Book Management */}
          <TabsContent value="books">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Book Management</CardTitle>
                  <CardDescription>Manage your book inventory and new arrivals</CardDescription>
                </div>
                <Button onClick={() => setShowAddBookModal(true)}>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Book
                </Button>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Title</TableHead>
                      <TableHead>Author</TableHead>
                      <TableHead>Genre</TableHead>
                      <TableHead>Price</TableHead>
                      <TableHead>Copies</TableHead>
                      <TableHead>Available</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {books.map((book) => (
                      <TableRow key={book.id}>
                        <TableCell className="font-medium">{book.title}</TableCell>
                        <TableCell>{book.author}</TableCell>
                        <TableCell>
                          <Badge variant="outline">{book.genre}</Badge>
                        </TableCell>
                        <TableCell>ZAR {book.price.toFixed(2)}</TableCell>
                        <TableCell>{book.totalCopies}</TableCell>
                        <TableCell>{book.availableCopies}</TableCell>
                        <TableCell>{book.isNewArrival && <Badge variant="default">New Arrival</Badge>}</TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">
                              <Edit className="h-3 w-3" />
                            </Button>
                            <Button variant="outline" size="sm">
                              <Trash2 className="h-3 w-3" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Borrowing History */}
          <TabsContent value="borrowing">
            <Card>
              <CardHeader>
                <CardTitle>Borrowing History</CardTitle>
                <CardDescription>Track all borrowing activities and returns</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>User</TableHead>
                      <TableHead>Book</TableHead>
                      <TableHead>Borrowed Date</TableHead>
                      <TableHead>Due Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {borrowingHistory.map((record) => (
                      <TableRow key={record.id}>
                        <TableCell className="font-medium">{record.userName}</TableCell>
                        <TableCell>{record.bookTitle}</TableCell>
                        <TableCell>{new Date(record.borrowedDate).toLocaleDateString()}</TableCell>
                        <TableCell>{new Date(record.dueDate).toLocaleDateString()}</TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              record.status === "returned"
                                ? "default"
                                : record.status === "overdue"
                                  ? "destructive"
                                  : "secondary"
                            }
                          >
                            {record.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">
                              View Details
                            </Button>
                            {record.status === "borrowed" && (
                              <Button variant="outline" size="sm">
                                Mark Returned
                              </Button>
                            )}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Add User Modal */}
        {showAddUserModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <Card className="w-full max-w-md">
              <CardHeader>
                <CardTitle>Add New User</CardTitle>
                <CardDescription>Enter the details of the new user</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="username">Username</Label>
                    <Input
                      id="username"
                      value={newUser.username}
                      onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
                      placeholder="Enter username"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={newUser.email}
                      onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                      placeholder="user@gmail.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="gender">Gender</Label>
                    <Select value={newUser.gender} onValueChange={(value) => setNewUser({ ...newUser, gender: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={() => setShowAddUserModal(false)}>
                  Cancel
                </Button>
                <Button onClick={handleAddUser}>Add User</Button>
              </CardFooter>
            </Card>
          </div>
        )}

        {/* Edit User Modal */}
        {showEditUserModal && editingUser && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <Card className="w-full max-w-md">
              <CardHeader>
                <CardTitle>Edit User</CardTitle>
                <CardDescription>Update user details</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="edit-username">Username</Label>
                    <Input
                      id="edit-username"
                      value={editingUser.username}
                      onChange={(e) => setEditingUser({ ...editingUser, username: e.target.value })}
                      placeholder="Enter username"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="edit-email">Email</Label>
                    <Input
                      id="edit-email"
                      type="email"
                      value={editingUser.email}
                      onChange={(e) => setEditingUser({ ...editingUser, email: e.target.value })}
                      placeholder="user@gmail.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="edit-gender">Gender</Label>
                    <Select
                      value={editingUser.gender}
                      onValueChange={(value) => setEditingUser({ ...editingUser, gender: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="edit-books">Books Borrowed</Label>
                    <Input
                      id="edit-books"
                      type="number"
                      value={editingUser.booksCount}
                      onChange={(e) =>
                        setEditingUser({
                          ...editingUser,
                          booksCount: Number.parseInt(e.target.value),
                        })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="edit-owed">Amount Owed (ZAR)</Label>
                    <Input
                      id="edit-owed"
                      type="number"
                      step="0.01"
                      value={editingUser.totalOwed}
                      onChange={(e) =>
                        setEditingUser({
                          ...editingUser,
                          totalOwed: Number.parseFloat(e.target.value),
                        })
                      }
                    />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button
                  variant="outline"
                  onClick={() => {
                    setShowEditUserModal(false)
                    setEditingUser(null)
                  }}
                >
                  Cancel
                </Button>
                <Button onClick={handleEditUser}>Save Changes</Button>
              </CardFooter>
            </Card>
          </div>
        )}

        {/* Delete User Confirmation */}
        <AlertDialog open={showDeleteConfirm} onOpenChange={setShowDeleteConfirm}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-destructive" />
                Confirm Deletion
              </AlertDialogTitle>
              <AlertDialogDescription>
                Are you sure you want to delete user <strong>{userToDelete?.username}</strong>? This action cannot be
                undone.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel onClick={() => setUserToDelete(null)}>Cancel</AlertDialogCancel>
              <AlertDialogAction
                onClick={handleDeleteUser}
                className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
              >
                Delete
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        {/* Add Book Modal */}
        {showAddBookModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <Card className="w-full max-w-md">
              <CardHeader>
                <CardTitle>Add New Book</CardTitle>
                <CardDescription>Enter the details of the new book</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Title</Label>
                    <Input
                      id="title"
                      value={newBook.title}
                      onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
                      placeholder="Enter book title"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="author">Author</Label>
                    <Input
                      id="author"
                      value={newBook.author}
                      onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
                      placeholder="Enter author name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="genre">Genre</Label>
                    <Input
                      id="genre"
                      value={newBook.genre}
                      onChange={(e) => setNewBook({ ...newBook, genre: e.target.value })}
                      placeholder="Enter genre"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="price">Price (ZAR)</Label>
                    <Input
                      id="price"
                      type="number"
                      step="0.01"
                      value={newBook.price}
                      onChange={(e) => setNewBook({ ...newBook, price: Number.parseFloat(e.target.value) })}
                      placeholder="0.00"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="copies">Total Copies</Label>
                    <Input
                      id="copies"
                      type="number"
                      value={newBook.totalCopies}
                      onChange={(e) => setNewBook({ ...newBook, totalCopies: Number.parseInt(e.target.value) })}
                      placeholder="0"
                    />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={() => setShowAddBookModal(false)}>
                  Cancel
                </Button>
                <Button onClick={handleAddBook}>Add Book</Button>
              </CardFooter>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}
