/**
 * v0 by Vercel.
 * @see https://v0.dev/t/XQAQ5NogoFb
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function Payment() {
  return (
    <div className="w-full max-w-3xl mx-auto py-12 md:py-16 px-4 md:px-6">
      <div className="space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Subscription Payment Details
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">
            Secure your access to our online courses and resources by making
            your subscription payment.
          </p>
        </div>
        <Card className="bg-muted p-6 md:p-8">
          <CardHeader>
            <CardTitle>Bank Account Details</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-1">
              <div className="text-muted-foreground">Account Holder</div>
              <div className="font-medium">Acme University</div>
            </div>
            <div className="grid gap-1">
              <div className="text-muted-foreground">Account Number</div>
              <div className="font-medium">123456789</div>
            </div>
            <div className="grid gap-1">
              <div className="text-muted-foreground">Routing Number</div>
              <div className="font-medium">987654321</div>
            </div>
            <Separator />
            <div className="grid gap-1">
              <div>What to do Next?</div>
              <div className="prose text-muted-foreground">
                Click on this link to fill this form. Select your desired
                category and upload the screenshot of Transaction.
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
