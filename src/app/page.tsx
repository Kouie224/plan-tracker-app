"use client";

import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Plan {
  id: number;
  description: string;
  accepted: boolean | null;
}

export default function PlanTracker() {
  const [plans, setPlans] = useState<Plan[]>([
    { id: 1, description: "Go to the gym", accepted: null },
    { id: 2, description: "Meet friends for dinner", accepted: true },
    { id: 3, description: "Work on weekend project", accepted: false },
  ]);
  const [newPlan, setNewPlan] = useState("");

  const handleAddPlan = () => {
    try {
      if (newPlan.trim() === "") {
        alert("Please enter a plan description");
        return;
      }
      
      const plan: Plan = {
        id: Date.now(),
        description: newPlan.trim(),
        accepted: null,
      };
      
      setPlans([...plans, plan]);
      setNewPlan("");
    } catch (error) {
      console.error("Error adding plan:", error);
      alert("Failed to add plan. Please try again.");
    }
  };

  const updatePlanStatus = (id: number, accepted: boolean) => {
    try {
      setPlans(plans.map(plan => 
        plan.id === id ? { ...plan, accepted } : plan
      ));
    } catch (error) {
      console.error("Error updating plan status:", error);
      alert("Failed to update plan status. Please try again.");
    }
  };

  const getStatusColor = (accepted: boolean | null) => {
    if (accepted === true) return "border-green-500 bg-green-500/10";
    if (accepted === false) return "border-red-500 bg-red-500/10";
    return "border-purple-500 bg-purple-500/10";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-black p-6 dark">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 p-8 rounded-xl bg-black/30 backdrop-blur-sm border border-purple-500/20">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-relaxed">
            وَلَا تَهِنُوا وَلَا تَحْزَنُوْا وَأَنْتُمُ الأَعْلَوْنَ إِنْ كُنْتُمْ مُؤْمِنِينَ
          </h1>
          <p className="text-xl md:text-2xl text-purple-200 italic font-medium">
            "And do not weaken and do not grieve, and you will be superior if you are believers"
          </p>
        </div>

        {/* Add New Plan Section */}
        <div className="mb-8 p-6 rounded-xl bg-black/20 backdrop-blur-sm border border-purple-500/20">
          <h2 className="text-2xl font-semibold text-white mb-4">Add New Plan</h2>
          <div className="flex gap-4">
            <Input
              type="text"
              placeholder="Enter your plan..."
              value={newPlan}
              onChange={(e) => setNewPlan(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleAddPlan()}
              className="flex-1 bg-black/30 border-purple-500/30 text-white placeholder:text-purple-300 focus:border-purple-400"
            />
            <Button 
              onClick={handleAddPlan}
              className="bg-purple-600 hover:bg-purple-700 text-white px-8"
            >
              Add Plan
            </Button>
          </div>
        </div>

        {/* Plans List Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-white mb-6">My Plans</h2>
          {plans.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-purple-300 text-lg">No plans yet. Add your first plan above!</p>
            </div>
          ) : (
            plans.map((plan) => (
              <Card 
                key={plan.id} 
                className={`${getStatusColor(plan.accepted)} border-2 bg-black/20 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02]`}
              >
                <CardHeader>
                  <CardTitle className="text-white text-lg">
                    {plan.description}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4 items-center">
                    <div className="flex gap-2">
                      <Button
                        onClick={() => updatePlanStatus(plan.id, true)}
                        variant={plan.accepted === true ? "default" : "outline"}
                        className={`${
                          plan.accepted === true 
                            ? "bg-green-600 hover:bg-green-700 text-white" 
                            : "border-green-500 text-green-400 hover:bg-green-500/20"
                        }`}
                      >
                        Yes
                      </Button>
                      <Button
                        onClick={() => updatePlanStatus(plan.id, false)}
                        variant={plan.accepted === false ? "destructive" : "outline"}
                        className={`${
                          plan.accepted === false 
                            ? "bg-red-600 hover:bg-red-700 text-white" 
                            : "border-red-500 text-red-400 hover:bg-red-500/20"
                        }`}
                      >
                        No
                      </Button>
                    </div>
                    <div className="ml-auto">
                      {plan.accepted === true && (
                        <span className="text-green-400 font-medium">✓ Accepted</span>
                      )}
                      {plan.accepted === false && (
                        <span className="text-red-400 font-medium">✗ Declined</span>
                      )}
                      {plan.accepted === null && (
                        <span className="text-purple-400 font-medium">⏳ Pending</span>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
