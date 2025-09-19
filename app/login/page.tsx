"use client";

import Link from "next/link";
import { BarChart3, Eye, EyeOff } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

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
import { useAuthUserContexts } from "@/hooks/use-contexts";
import { setSession } from "@/service/utils";
import { LoginUser } from "@/service/post-request";
import { paths } from "@/constants/paths";

export default function LoginPage() {
  const router = useRouter();
  const { setAccessToken } = useAuthUserContexts();
  const searchParams = useSearchParams();
  const returnTo = searchParams.get("returnTo");

  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {}
  );
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false); // for eye toggle

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    if (!email || !password) {
      setErrors({
        email: email ? "" : "Email is required.",
        password: password ? "" : "Password is required.",
      });
      setLoading(false);
      return;
    }

    try {
      const res = await LoginUser({ email, password });
      if (res) {
        sessionStorage.setItem("Token", res.token);
        setAccessToken(res.token);
        setSession(res.token);
        setLoading(false);
        router.push(returnTo || paths.dashboard);
      } else {
        setLoading(false);
        alert(res.message || "Login failed, please try again.");
      }
    } catch (error) {
      setLoading(false);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left side */}
      <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-[#CD8EF1] to-[#F1A7CD] p-8 text-white flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 mb-12">
            <BarChart3 className="h-8 w-8" />
            <h1 className="text-2xl font-bold">ShopMart</h1>
          </div>
          <div className="space-y-6 max-w-md">
            <h2 className="text-4xl font-bold text-black">
              Welcome back to your ShopMart dashboard
            </h2>
            <p className="text-blue-100">
              Access your customer data, track sales performance, and manage
              your team all in one place.
            </p>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
              <span className="font-semibold text-black">JD</span>
            </div>
            <div>
              <p className="font-medium">
                "This ShopMart has increased our sales team productivity by 35%"
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right side */}
      <div className="flex-1 flex items-center justify-center p-6">
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-1">
            <div className="flex items-center md:hidden mb-2">
              <BarChart3 className="h-6 w-6 text-blue-600 mr-2" />
              <span className="font-bold text-xl">ShopMart Pro</span>
            </div>
            <CardTitle className="text-2xl font-bold">Login</CardTitle>
            <CardDescription>
              Enter your email and password to access your dashboard
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <form onSubmit={handleSubmit}>
              {/* Email Field */}
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-describedby="email-error"
                />
                {errors.email && (
                  <p id="email-error" className="text-sm text-red-600">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Password Field with Eye Toggle */}
              <div className="space-y-2 mt-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <Link
                    href="/forgot-password"
                    className="text-sm text-blue-600 hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    aria-describedby="password-error"
                    className="pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
                {errors.password && (
                  <p id="password-error" className="text-sm text-red-600">
                    {errors.password}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <CardFooter className="flex flex-col space-y-4 mt-5">
                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  disabled={loading}
                >
                  {loading ? "Logging in..." : "Login to Dashboard"}
                </Button>
              </CardFooter>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
