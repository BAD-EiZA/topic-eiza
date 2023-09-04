"use client";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { History } from "lucide-react";
import { useRouter } from "next/navigation";
type Props = {};

const HistoryCard = (props: Props) => {
  const router = useRouter();
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 15 }}
        transition={{ delay: 0.60 }}
      >
        <Card className="hover:cursor-pointer hover:opacity-75" onClick={() => {
        router.push("/history");
      }}>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-1">
            <CardTitle className="text-2xl font-bold">History</CardTitle>
            <History size={20} strokeWidth={2.5} />
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              View last topic attempts
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </AnimatePresence>
  );
};

export default HistoryCard;
