import React from 'react'
import getCurrentUser from '../actions/getCurrentUser'
import { redirect } from 'next/navigation';
import PageContainer from '@/components/layout/page-container';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, KanbanSquare, User2Icon } from 'lucide-react';
import getClassrooms from '../actions/getClassrooms';
import getTeachers from '../actions/getTeachers';
import getStudents from '../actions/getStudents';

const page = async () => {
  const user = await getCurrentUser();
  const classrooms = await getClassrooms();
  const teachers = await getTeachers();
  const students = await getStudents();
  
  if(!user?.email || !user?.id){
    redirect('/login');
  }

  return (
    <PageContainer scrollable={true}>
      <div className="space-y-2">
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics" disabled>
              Analytics
            </TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Total Classrooms
                  </CardTitle>
                  <KanbanSquare />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{classrooms?.length}</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Teachers
                  </CardTitle>
                  <User2Icon />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{teachers?.length}</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Students</CardTitle>
                  <GraduationCap />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{students?.length}</div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </PageContainer>
  )
}

export default page