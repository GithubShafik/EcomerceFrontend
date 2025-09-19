export interface Lead {
  [x: string]: any;
  id: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  source: string;
  value: number;
  priority: string;
  lastContact: string;
  expectedRevenue:string;
}

export interface Column {
  id: string;
  title: string;
  leads: Lead[];
}

export interface Stage {
  id: any;
  pipelineId: number;
  description: any;
  createdAt: string;
  updatedAt: string;
  orderNo: number;
  name: string;
}

export interface Pipeline {
  id: any;
  description: string;
  createdAt: string;
  updatedAt: string;
  pipelineStage: Stage[];
}
