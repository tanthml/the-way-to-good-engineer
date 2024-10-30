import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ChevronDown, ChevronRight, Users, Code, Brain, Target, Workflow, MessageSquare } from 'lucide-react';

const TraitCard = ({ title, description, icon: Icon, expanded, onClick }) => (
  <div 
    className="mb-4 cursor-pointer"
    onClick={onClick}
  >
    <div className="flex items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
      <Icon className="w-6 h-6 text-blue-600 mr-3" />
      <div className="flex-grow">
        <h3 className="font-semibold text-lg">{title}</h3>
        {expanded && (
          <p className="mt-2 text-gray-600 text-sm">
            {description}
          </p>
        )}
      </div>
      {expanded ? (
        <ChevronDown className="w-5 h-5 text-gray-400" />
      ) : (
        <ChevronRight className="w-5 h-5 text-gray-400" />
      )}
    </div>
  </div>
);

const GoodEngineerTraits = () => {
  const [expandedTrait, setExpandedTrait] = useState(null);

  const traits = [
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Influences others and works effectively with the team. Communicates well both in written and spoken form. Participates in code reviews, pair programming, and provides constructive feedback."
    },
    {
      icon: Workflow,
      title: "Process Understanding",
      description: "Understands and navigates organizational processes effectively. Knows when and how to bend rules appropriately. Familiar with methodologies like Kanban, Scrum, and technical decision-making frameworks."
    },
    {
      icon: Target,
      title: "Quality Focus",
      description: "Proactively embeds quality elements into deliverables. Practices test-driven development, considers refactoring as part of feature implementation, and maintains high standards consistently."
    },
    {
      icon: Brain,
      title: "Adaptability & Learning",
      description: "Constantly adapts to changing circumstances and maintains a learning mindset. Admits mistakes publicly and holds themselves accountable. Seeks growth opportunities even in uncomfortable situations."
    },
    {
      icon: Code,
      title: "Technical Excellence",
      description: "Works on reducing complexity in the codebase. Creates modular designs, maintains proper separation of concerns, and implements effective testing strategies."
    },
    {
      icon: MessageSquare,
      title: "Stakeholder Understanding",
      description: "Understands stakeholder needs and adjusts approach accordingly. Balances quality with delivery timelines and organizational requirements."
    }
  ];

  return (
    <Card className="w-full max-w-3xl">
      <CardHeader className="bg-blue-50">
        <CardTitle className="text-xl">
          Traits of a Good Software Engineer
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-2">
          {traits.map((trait, index) => (
            <TraitCard
              key={index}
              {...trait}
              expanded={expandedTrait === index}
              onClick={() => setExpandedTrait(expandedTrait === index ? null : index)}
            />
          ))}
        </div>
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <p className="text-sm text-blue-800">
            <strong>Note:</strong> A great engineer demonstrates all these traits proactively, taking initiative to solve problems and improve processes without waiting for permission.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default GoodEngineerTraits;
