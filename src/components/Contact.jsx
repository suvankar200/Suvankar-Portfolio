import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Send, Copy, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

/* 
  CONTACT FORM SETUP - CONFIGURED WITH FORMSPREE:
  
  ✅ ACTIVE: Using Formspree (https://formspree.io/f/xanlwnyo)
  
  How it works:
  - Form submissions are sent directly to your email via Formspree
  - Emails will be sent to: pramaniksuvankar2004@gmail.com
  - Fallback to mailto if Formspree is unavailable
  - Free tier: 50 submissions/month
  
  To manage your form:
  - Visit: https://formspree.io/forms/xanlwnyo/integration
  - View submissions, configure settings, upgrade if needed
*/

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [copiedEmail, setCopiedEmail] = useState(false);

  const tryEmailClient = () => {
    const mailtoLink = "mailto:pramaniksuvankar2004@gmail.com?subject=Hello%20Suvankar";
    window.location.href = mailtoLink;
    
    // Fallback: show a toast with instructions if mailto doesn't work
    setTimeout(() => {
      toast({
        title: "Email Client",
        description: "If your email client didn't open, please copy the email address above and compose manually.",
      });
    }, 1000);
  };

  const copyEmailToClipboard = async () => {
    try {
      await navigator.clipboard.writeText("pramaniksuvankar2004@gmail.com");
      setCopiedEmail(true);
      toast({
        title: "Email Copied!",
        description: "Email address copied to clipboard",
      });
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch (err) {
      toast({
        title: "Copy Failed",
        description: "Please manually copy: pramaniksuvankar2004@gmail.com",
        variant: "destructive",
      });
    }
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Using your Formspree form
      const response = await fetch('https://formspree.io/f/xanlwnyo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `Portfolio Contact from ${formData.name}`,
          _gotcha: '', // Honeypot field for spam protection
        }),
      });

      if (response.ok) {
        toast({
          title: "Message Sent Successfully!",
          description: "Thank you for reaching out. I'll get back to you soon!",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      // Fallback to mailto if Formspree fails
      const subject = `Portfolio Contact from ${formData.name}`;
      const body = `Hi Suvankar,

You received a new message from your portfolio website:

Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}

--
This message was sent via your portfolio contact form.
You can reply directly to: ${formData.email}`;
      
      const mailtoUrl = `mailto:pramaniksuvankar2004@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoUrl;
      
      toast({
        title: "Email Draft Created",
        description: "Formspree unavailable. Your email client should open with the message draft.",
      });
      
      setFormData({ name: "", email: "", message: "" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/suvankar200",
      color: "hover:text-gray-400",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/suvankar-pramanik?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BG%2BEiUd98RnqUd2vyXnxp6A%3D%3D",
      color: "hover:text-blue-500",
    },
    {
      icon: Mail,
      label: "Email",
      href: "https://mail.google.com/mail/?view=cm&to=pramaniksuvankar2004@gmail.com",
      color: "hover:text-red-500",
    },
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
            Get In Touch
          </h2>
          <p className="text-center text-foreground/60 mb-12 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Let's connect!
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card className="card-glow bg-card border-border">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Honeypot field for spam protection */}
                  <input
                    type="text"
                    name="_gotcha"
                    style={{ display: 'none' }}
                    tabIndex="-1"
                    autoComplete="off"
                  />
                  
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="bg-muted border-border focus:border-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                      className="bg-muted border-border focus:border-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or idea..."
                      required
                      rows={5}
                      className="bg-muted border-border focus:border-primary resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full glow-border bg-primary hover:bg-primary/90"
                    disabled={isSubmitting}
                  >
                    <Send className="mr-2 w-4 h-4" />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Social Links & Info */}
            <div className="space-y-6">
              <Card className="card-glow bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
                  <div className="space-y-4">
                    {socialLinks.map((social) => {
                      const Icon = social.icon;
                      return (
                        <div key={social.label} className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                            <Icon className="w-5 h-5" />
                          </div>
                          <div className="flex-1">
                            <span className="font-medium text-foreground block">{social.label}</span>
                            {social.label === "Email" ? (
                              <div className="flex flex-col gap-2 mt-1">
                                <a
                                  href="https://mail.google.com/mail/?view=cm&to=pramaniksuvankar2004@gmail.com"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-sm text-primary hover:underline"
                                >
                                  Open in Gmail
                                </a>
                                <button
                                  onClick={tryEmailClient}
                                  className="text-sm text-primary hover:underline text-left"
                                >
                                  Try Email Client
                                </button>
                                <button
                                  onClick={copyEmailToClipboard}
                                  className="text-sm text-primary hover:underline flex items-center gap-1 text-left"
                                >
                                  {copiedEmail ? (
                                    <>
                                      <Check className="w-3 h-3" />
                                      Copied!
                                    </>
                                  ) : (
                                    <>
                                      <Copy className="w-3 h-3" />
                                      Copy Email
                                    </>
                                  )}
                                </button>
                                <span className="text-xs text-foreground/60 select-all">pramaniksuvankar2004@gmail.com</span>
                              </div>
                            ) : (
                              <a
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`text-sm transition-colors ${social.color}`}
                              >
                                View Profile
                              </a>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              <Card className="card-glow bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Quick Info</h3>
                  <div className="space-y-3 text-sm text-foreground/80">
                    <p>
                      <span className="font-medium text-foreground">Email:</span> 
                      <a 
                        href="https://mail.google.com/mail/?view=cm&to=pramaniksuvankar2004@gmail.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="ml-1 text-primary hover:underline"
                      >
                        pramaniksuvankar2004@gmail.com
                      </a>
                    </p>
                    <p>
                      <span className="font-medium text-foreground">Location:</span> Kolkata, India
                    </p>
                    <p>
                      <span className="font-medium text-foreground">Education:</span> B.Tech CSE, Adamas University
                    </p>
                    <p>
                      <span className="font-medium text-foreground">Status:</span> Open to collaborations
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;




