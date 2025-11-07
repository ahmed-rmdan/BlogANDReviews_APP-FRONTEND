
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import Link from "next/link"

export function LoginAdmin() {
  return (
    <Card className="w-full max-w-sm rounded-2xl">
      <CardHeader>
        <CardTitle className=" text-[7em] font-bold text-main  text-center  sm:text-[5em] ">Admin login</CardTitle>
        <CardDescription >
          Enter your userName and password below to login to your Admin Dashboard
        </CardDescription>
        <CardAction>
      
        </CardAction>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">UserName</Label>
              <Input
                id="email"
                type="text"
                placeholder=""
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <a
                  href="/repass"
                  className="ml-auto text-main inline-block text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </a>
              </div>
              <Input id="password" type="password" required />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full bg-main text-white hover:bg-gray-500 hover:cursor-pointer ">
          Login
        </Button>
   
      </CardFooter>
    </Card>
  )
}