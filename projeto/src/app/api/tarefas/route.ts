import { NextResponse } from "next/server";

/*
 >GET
 >POST
 >PUT
 >DELETE
*/

let tarefas = ["Comprar coca", "Estudar NextJS"]

export async function GET(request: Request){
    return NextResponse.json(tarefas)
}

export async function POST(request: Request){
    const data = await request.json()
    tarefas.push(data.name)
    return NextResponse.json(tarefas)
}

//http://localhost:3000/api/tarefas?index=1
export async function PUT(request: Request){
    const {searchParams} = new URL(request.url)
    const index = searchParams.get("index")

    const data = await request.json()

    tarefas[Number(index)] = data.name

    return NextResponse.json({message: "Tarefa atualizada com sucesso!"})
}

export async function DELETE(request: Request){
     const {searchParams} = new URL(request.url)
     const index = searchParams.get("index")

     tarefas.splice(Number(index),1)

     return NextResponse.json({message: "Tarefa deletada com sucesso!"})
}