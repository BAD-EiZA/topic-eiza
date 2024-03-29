
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import HistoryComponent from "@/components/History";
import { getAuthSession } from "@/lib/nextauth";
import {redirect} from 'next/navigation'
type Props = {};

const RecentTopic = async(props: Props) => {
  const session = await getAuthSession();
  if(!session){
    return redirect("/")
  }
  return (
    <Card className="col-span-4 lg:col-span-3">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Recent Activities</CardTitle>
        <CardDescription>
          You have learning a total of 7 topics.
        </CardDescription>
      </CardHeader>
      <CardContent className="max-h-[580px] overflow-scroll">
        <HistoryComponent limit={10} userId={session.user.id} />
      </CardContent>
    </Card>
  );
};

export default RecentTopic;
