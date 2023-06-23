import { Args, Float, Int, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class HelloWorldResolver {
    @Query(()=> String, {description: "El retorno de esta query es HolaMundo", name: "hello"})
    helloWorld():string{
        return "Hola Mundo"
    }

    @Query(()=>Float, {name:"randomNumber"})
    getRandomNumber():number {
        return Math.random() * 100
    }

    @Query(()=>Int, {name:"randomFromZeroTo", description:"From zero to argument  (default 6)"})
    getRandomFromZeroTo(
        @Args("to", {type: () => Int, nullable:true}) to:number = 6
    ):number {
        return Math.floor(Math.random() * to)
    }
}
