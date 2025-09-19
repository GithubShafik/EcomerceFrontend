export interface Stage {
    id: string
    name: string
    order: number
  }
  
  export interface Pipeline {
    [x: string]: any
    pipelineStage: any
    id: number
    title: string
    description: string
    createdAt: string | any
    stages: Stage[]
  }
  