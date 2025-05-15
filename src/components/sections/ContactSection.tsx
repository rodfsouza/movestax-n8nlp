    import { useForm } from "react-hook-form"
    import { zodResolver } from "@hookform/resolvers/zod"
    import * as z from "zod"
    import { Button } from "@/components/ui/button"
    import { Input } from "@/components/ui/input"
    import { Label } from "@/components/ui/label"
    import { Textarea } from "@/components/ui/textarea"
    import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
    import { toast } from "sonner" // Using sonner directly

    const contactFormSchema = z.object({
      name: z.string().min(2, "Name must be at least 2 characters."),
      email: z.string().email("Invalid email address."),
      message: z.string().min(10, "Message must be at least 10 characters."),
    })

    type ContactFormValues = z.infer<typeof contactFormSchema>

    export function ContactSection() {
      const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<ContactFormValues>({
        resolver: zodResolver(contactFormSchema),
      })

      const onSubmit = async (data: ContactFormValues) => {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000))
        console.log("Form submitted:", data)
        toast.success("Message sent! We'll get back to you soon.")
        reset()
      }

      return (
        <section id="contact" className="py-16 md:py-24 bg-background animate-fadeIn" style={{animationDelay: '1s'}}>
          <div className="container mx-auto px-4">
            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-center">Get in Touch or Sign Up</CardTitle>
                <CardDescription className="text-center text-muted-foreground pt-2">
                  Have questions or ready to start automating? Fill out the form below.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" {...register("name")} placeholder="John Doe" className="mt-1" />
                    {errors.name && <p className="text-sm text-destructive mt-1">{errors.name.message}</p>}
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" {...register("email")} placeholder="you@example.com" className="mt-1" />
                    {errors.email && <p className="text-sm text-destructive mt-1">{errors.email.message}</p>}
                  </div>
                  <div>
                    <Label htmlFor="message">Message or Requirements</Label>
                    <Textarea id="message" {...register("message")} placeholder="Tell us about your automation needs..." className="mt-1" rows={5} />
                    {errors.message && <p className="text-sm text-destructive mt-1">{errors.message.message}</p>}
                  </div>
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message / Sign Up"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      )
    }
