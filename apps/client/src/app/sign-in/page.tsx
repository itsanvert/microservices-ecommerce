import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FaGoogle } from "react-icons/fa";
export function SignIn() {
  return (
    <Card className="w-full max-w-sm mx-auto mt-20">
      <CardHeader>
        <CardTitle>ចូលគណនី</CardTitle>
        <CardDescription>សូមចូលទៅកាន់គណនីរបស់អ្នកដើម្បីបន្ត</CardDescription>
      </CardHeader>

      <div className="flex justify-center px-6 mb-4">
        <Button variant="outline" className="flex items-center gap-2 w-full">
          {/* You can add a Google Icon here */}
          <FaGoogle />
          ចូលគណនីជាមួយ Google <br />
        </Button>
      </div>

      <CardContent>
        <form className="flex flex-col gap-6">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>

          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
              <a
                href="#"
                className="ml-auto text-sm underline-offset-4 hover:underline"
              >
                Forgot your password?
              </a>
            </div>
            <Input id="password" type="password" required />
          </div>

          <Button type="submit" className="w-full cursor-pointer">
            ចូល
          </Button>
        </form>
      </CardContent>

      <CardFooter className="flex justify-center">
        <Button variant="link">ចុះឈ្មោះ</Button>
      </CardFooter>
    </Card>
  );
}

export default SignIn;
