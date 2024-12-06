import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./card";
import { Button } from "./button";
import Link from "next/link";

interface LeaderboardScoreCardProps {
  name: string;
  time: string;
  date: string;
  youtubeLink: string;
}

export function LeaderboardScoreCard({
  name,
  time,
  date,
  youtubeLink,
}: LeaderboardScoreCardProps) {
  return (
    <Card className="w-[80%] mx-auto my-4 bg-black border-white/20">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-xl font-bold">{name}</CardTitle>
        <div className="text-sm text-muted-foreground">{date}</div>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold">{time}</div>
          <Button variant="outline" size="sm" asChild>
            <Link href={youtubeLink} target="_blank">
              Watch Run
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
