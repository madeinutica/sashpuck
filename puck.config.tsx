import React from "react";
import type { Config } from "@measured/puck";

type Props = {
  HeadingBlock: { title: string };
  HeroSection: { 
    title: string; 
    subtitle: string; 
    ctaText: string; 
    ctaLink: string;
    secondaryCtaText?: string;
    secondaryCtaLink?: string;
    backgroundImage?: string;
    badge?: string;
    videoUrl?: string;
  };
  PromoBanner: {
    imageUrl: string;
    altText: string;
    link?: string;
  };
  FeatureCard: {
    icon: string;
    title: string;
    description: string;
  };
  ServiceCard: {
    title: string;
    features: Array<string>;
    ctaText: string;
    ctaLink: string;
    image?: string;
  };
  BeforeAfterServiceCard: {
    title: string;
    beforeImage: string;
    afterImage: string;
    features: Array<string>;
    ctaText: string;
    ctaLink: string;
    description?: string;
  };
  TextBlock: {
    content: string;
    alignment: "left" | "center" | "right";
  };
  ImageGallery: {
    images: Array<{ src: string; alt: string; caption?: string }>;
    columns: 2 | 3 | 4;
  };
  ContactSection: {
    title: string;
    phone: string;
    email: string;
    address: string;
  };
  CallToAction: {
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
    secondaryButtonText?: string;
    secondaryButtonLink?: string;
    backgroundColor: string;
  };
  StatsSection: {
    title: string;
    subtitle: string;
    stats: Array<{ number: string; label: string; description: string }>;
    backgroundColor: string;
    additionalText?: string;
    ctaText?: string;
    ctaLink?: string;
  };
  TestimonialCard: {
    name: string;
    location: string;
    service: string;
    testimonial: string;
    videoUrl?: string;
  };
  TestimonialsGrid: {
    title: string;
    subtitle?: string;
    testimonials: Array<{
      name: string;
      location: string;
      service: string;
      testimonial: string;
      videoUrl?: string;
    }>;
  };
  ServiceAreas: {
    title: string;
    subtitle: string;
    areas: Array<{ name: string; population: string }>;
    additionalText: string;
  };
  ServicesGrid: {
    title: string;
    subtitle: string;
    services: Array<{
      title: string;
      beforeImage: string;
      afterImage: string;
      features: Array<string>;
      ctaText: string;
      ctaLink: string;
      description: string;
    }>;
  };
  WindowsHero: {
    title: string;
    subtitle: string;
    badge: string;
    ctaText: string;
    ctaLink: string;
    secondaryCtaText: string;
    secondaryCtaLink: string;
    features: Array<{
      icon: string;
      title: string;
      description: string;
    }>;
    videoUrl?: string;
    backgroundImages: Array<string>;
  };
  WindowsFeatures: {
    title: string;
    subtitle: string;
    features: Array<{
      icon: string;
      title: string;
      description: string;
      items: Array<string>;
    }>;
  };
  WindowsInstallation: {
    title: string;
    subtitle: string;
    description: string;
    processTitle: string;
    processSteps: Array<string>;
    videoUrl?: string;
  };
  WindowsTestimonials: {
    title: string;
    subtitle: string;
    testimonials: Array<{
      name: string;
      location: string;
      description: string;
      videoUrl: string;
    }>;
  };
  AboutHero: {
    title: string;
    subtitle: string;
    badge: string;
    ctaText: string;
    ctaLink: string;
    secondaryCtaText: string;
    secondaryCtaLink: string;
    stats: Array<{
      number: string;
      label: string;
    }>;
    videoUrl?: string;
  };
  CompanyOverview: {
    title: string;
    description: string;
    additionalText: string;
    image: string;
    stats: Array<{
      number: string;
      label: string;
    }>;
  };
  CompanyTimeline: {
    title: string;
    subtitle: string;
    timelineItems: Array<{
      year: string;
      title: string;
      description: string;
    }>;
  };
  CoreValues: {
    title: string;
    subtitle: string;
    values: Array<{
      icon: string;
      title: string;
      description: string;
    }>;
  };
  CertificationsAwards: {
    title: string;
    subtitle: string;
    certifications: Array<{
      image: string;
      title: string;
      description: string;
    }>;
  };
  TeamSection: {
    title: string;
    subtitle: string;
    teamMembers: Array<{
      name: string;
      position: string;
      role: string;
      description: string;
      image: string;
    }>;
  };
  CommunityInvolvement: {
    title: string;
    subtitle: string;
    description: string;
    activities: Array<string>;
    image: string;
  };
  FeaturesWithImage: {
    title: string;
    features: Array<string>;
    imageUrl: string;
    badgeText: string;
    backgroundColor: string;
  };
  SidingHero: {
    title: string;
    subtitle: string;
    badge: string;
    ctaText: string;
    ctaLink: string;
    secondaryCtaText: string;
    secondaryCtaLink: string;
    features: Array<{
      icon: string;
      title: string;
      description: string;
    }>;
    videoUrl?: string;
    colorSwatches: Array<{
      name: string;
      color: string;
      image: string;
    }>;
  };
  ContactForm: {
    title: string;
    subtitle: string;
    phone: string;
    email: string;
    address: string;
  };
};

export const config: Config<Props> = {
  components: {
    HeadingBlock: {
      fields: {
        title: { type: "text" },
      },
      defaultProps: {
        title: "Heading",
      },
      render: ({ title }) => (
        <div style={{ padding: "2rem" }}>
          <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#333", margin: 0 }}>{title}</h1>
        </div>
      ),
    },
    HeroSection: {
      fields: {
        title: { type: "text" },
        subtitle: { type: "textarea" },
        ctaText: { type: "text" },
        ctaLink: { type: "text" },
        secondaryCtaText: { type: "text" },
        secondaryCtaLink: { type: "text" },
        backgroundImage: { type: "text" },
        badge: { type: "text" },
        videoUrl: { type: "text" },
      },
      defaultProps: {
  title: "Transform Your Home's Beauty & Comfort",
  subtitle: "Central New York's premier provider of premium windows, siding, bathrooms, and entry doors.",
  ctaText: "Get Free Consultation",
  ctaLink: "/contact",
  secondaryCtaText: "(315) 624-7344",
  secondaryCtaLink: "tel:+13156247344",
  backgroundImage: "",
  badge: "Trusted Since 1988 | 10,000+ Projects Completed",
  videoUrl: "https://www.youtube.com/embed/3wKPyfZBFCM",
      },
      render: ({ title, subtitle, ctaText, ctaLink, secondaryCtaText, secondaryCtaLink, backgroundImage, badge, videoUrl }) => (
        <div 
          style={{ 
            background: backgroundImage ? `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.6)), url(${backgroundImage})` : "linear-gradient(135deg, #1a1a1a 0%, #333 100%)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            color: "white",
            padding: "6rem 2rem",
            minHeight: "80vh",
            display: "flex",
            alignItems: "center",
            position: "relative"
          }}
        >
          {/* Grid Pattern Overlay */}
          <div style={{
            position: "absolute",
            inset: "0",
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
              radial-gradient(circle at 20px 20px, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "20px 20px, 20px 20px, 20px 20px",
            pointerEvents: "none"
          }}></div>
          
          <div style={{ maxWidth: "1200px", margin: "0 auto", width: "100%", position: "relative", zIndex: 1 }}>
            <div style={{ 
              display: "grid", 
              gridTemplateColumns: videoUrl ? "1fr 1fr" : "1fr", 
              gap: "4rem", 
              alignItems: "center" 
            }}>
              {/* Left Column - Content */}
              <div style={{ maxWidth: videoUrl ? "none" : "600px" }}>
                {badge && (
                  <div style={{
                    display: "inline-block",
                    backgroundColor: "#dc143c",
                    color: "white",
                    padding: "0.5rem 1rem",
                    borderRadius: "0",
                    fontSize: "0.9rem",
                    fontWeight: "600",
                    marginBottom: "1.5rem"
                  }}>
                    {badge}
                  </div>
                )}
                <h1 style={{ 
                  fontSize: "3.5rem", 
                  fontWeight: "bold", 
                  marginBottom: "1.5rem", 
                  lineHeight: "1.1",
                  color: "white"
                }}>
                  {title.includes("Beauty & Comfort") ? (
                    <>
                      Transform Your Home's<br />
                      <span style={{ color: "#dc143c" }}>Beauty & Comfort</span>
                    </>
                  ) : title}
                </h1>
                <p style={{ 
                  fontSize: "1.3rem", 
                  marginBottom: "2rem", 
                  opacity: 0.9,
                  lineHeight: "1.6"
                }}>
                  {subtitle}
                </p>
                <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                  <a 
                    href={ctaLink}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      backgroundColor: "#dc143c",
                      color: "white",
                      padding: "1rem 2rem",
                      fontSize: "1.1rem",
                      fontWeight: "600",
                      textDecoration: "none",
                      borderRadius: "0",
                      transition: "background-color 0.3s ease"
                    }}
                  >
                    {ctaText}
                    <span>→</span>
                  </a>
                  {secondaryCtaText && (
                    <a 
                      href={secondaryCtaLink}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        backgroundColor: "white",
                        color: "#333",
                        padding: "1rem 2rem",
                        fontSize: "1.1rem",
                        fontWeight: "600",
                        textDecoration: "none",
                        borderRadius: "0",
                        transition: "background-color 0.3s ease"
                      }}
                    >
                      📞 {secondaryCtaText}
                    </a>
                  )}
                </div>
              </div>
              
              {/* Right Column - Video */}
              {videoUrl && (
                <div style={{ 
                  position: "relative",
                  paddingBottom: "56.25%", // 16:9 aspect ratio
                  height: 0,
                  borderRadius: "8px",
                  overflow: "hidden",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)"
                }}>
                  <iframe
                    src={videoUrl}
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      border: "none"
                    }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Company Video"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      ),
    },
    PromoBanner: {
      fields: {
        imageUrl: { type: "text" },
        altText: { type: "text" },
        link: { type: "text" },
      },
      defaultProps: {
        imageUrl: "/images/cta/contest-logo-25k-hig-2026-long-2048x333.png",
        altText: "$25,000 Home Improvement Giveaway",
        link: "/contact",
      },
      render: ({ imageUrl, altText, link }) => (
        <div style={{
          padding: "2rem",
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#f8f9fa"
        }}>
          <div style={{ maxWidth: "1200px", width: "100%" }}>
            {link ? (
              <a href={link} style={{ display: "block" }}>
                <img
                  src={imageUrl}
                  alt={altText}
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "8px",
                    boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
                  }}
                />
              </a>
            ) : (
              <img
                src={imageUrl}
                alt={altText}
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "8px",
                  boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
                }}
              />
            )}
          </div>
        </div>
      ),
    },
    FeatureCard: {
      fields: {
        icon: { type: "text" },
        title: { type: "text" },
        description: { type: "textarea" },
      },
      defaultProps: {
        icon: "🏠",
        title: "Feature Title",
        description: "Feature description goes here",
      },
      render: ({ icon, title, description }) => (
        <div style={{ 
          background: "white",
          padding: "2rem",
          borderRadius: "0",
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          textAlign: "center",
          height: "100%",
          margin: "1rem"
        }}>
          <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>{icon}</div>
          <h3 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1rem", color: "#333" }}>
            {title}
          </h3>
          <p style={{ color: "#666", lineHeight: "1.6" }}>{description}</p>
        </div>
      ),
    },
    ServiceCard: {
      fields: {
        title: { type: "text" },
        features: { 
          type: "array",
          arrayFields: {
            feature: { type: "text" }
          }
        },
        ctaText: { type: "text" },
        ctaLink: { type: "text" },
        image: { type: "text" },
      },
      defaultProps: {
        title: "Service Title",
        features: [],
        ctaText: "Learn More",
        ctaLink: "#",
        image: "",
      },
      render: ({ title, features, ctaText, ctaLink, image }) => (
        <div className="service-card-item" style={{ 
          background: "white",
          borderRadius: "0",
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          overflow: "hidden",
          height: "100%",
          display: "flex",
          flexDirection: "column"
        }}>
          {image && (
            <img 
              src={image} 
              alt={title}
              style={{ 
                width: "100%", 
                height: "200px", 
                objectFit: "cover"
              }}
            />
          )}
          <div style={{ padding: "1.5rem", flex: 1, display: "flex", flexDirection: "column" }}>
            <h3 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1rem", color: "#333" }}>
              {title}
            </h3>
            <ul style={{ margin: "0 0 1.5rem 0", padding: 0, listStyle: "none", flex: 1 }}>
              {features.map((feature: any, index: number) => (
                <li key={index} style={{ 
                  display: "flex", 
                  alignItems: "center", 
                  marginBottom: "0.5rem",
                  color: "#666"
                }}>
                  <span style={{ color: "#dc143c", marginRight: "0.5rem", fontWeight: "bold" }}>✓</span>
                  {feature.feature || feature}
                </li>
              ))}
            </ul>
            <a 
              href={ctaLink}
              style={{
                backgroundColor: "#dc143c",
                color: "white",
                padding: "0.75rem 1.5rem",
                borderRadius: "0",
                textDecoration: "none",
                textAlign: "center",
                fontWeight: "600",
                transition: "background-color 0.3s ease"
              }}
            >
              {ctaText}
            </a>
          </div>
        </div>
      ),
    },
    BeforeAfterServiceCard: {
      fields: {
        title: { type: "text" },
        beforeImage: { type: "text" },
        afterImage: { type: "text" },
        features: { 
          type: "array",
          arrayFields: {
            feature: { type: "text" }
          }
        },
        ctaText: { type: "text" },
        ctaLink: { type: "text" },
        description: { type: "textarea" },
      },
      defaultProps: {
        title: "Service Title",
        beforeImage: "https://via.placeholder.com/400x300?text=Before",
        afterImage: "https://via.placeholder.com/400x300?text=After",
        features: ["Feature 1", "Feature 2", "Feature 3"],
        ctaText: "Learn More",
        ctaLink: "#",
        description: "",
      },
      render: ({ title, beforeImage, afterImage, features, ctaText, ctaLink, description }) => {
        const [showAfter, setShowAfter] = React.useState(false);
        
        return (
          <div style={{ 
            background: "white",
            borderRadius: "0",
            boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
            overflow: "hidden",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            border: "1px solid #e5e7eb"
          }}>
            {/* Image Container with Before/After Toggle */}
            <div style={{ 
              position: "relative",
              height: "250px",
              overflow: "hidden",
              backgroundColor: "#f8f9fa"
            }}>
              {/* Before Image */}
              <img 
                src={beforeImage} 
                alt={`${title} - Before`}
                style={{ 
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%", 
                  height: "100%", 
                  objectFit: "cover",
                  transition: "opacity 0.3s ease",
                  opacity: showAfter ? 0 : 1
                }}
              />
              {/* After Image */}
              <img 
                src={afterImage} 
                alt={`${title} - After`}
                style={{ 
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%", 
                  height: "100%", 
                  objectFit: "cover",
                  transition: "opacity 0.3s ease",
                  opacity: showAfter ? 1 : 0
                }}
              />
              
              {/* Toggle Buttons */}
              <div style={{
                position: "absolute",
                bottom: "15px",
                left: "50%",
                transform: "translateX(-50%)",
                display: "flex",
                gap: "8px",
                zIndex: 10
              }}>
                <button
                  onClick={() => setShowAfter(false)}
                  style={{
                    backgroundColor: !showAfter ? "#6b7280" : "#d1d5db",
                    color: "white",
                    border: "none",
                    padding: "8px 16px",
                    borderRadius: "0",
                    fontSize: "14px",
                    fontWeight: "600",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.2)"
                  }}
                >
                  Before
                </button>
                <button
                  onClick={() => setShowAfter(true)}
                  style={{
                    backgroundColor: showAfter ? "#6b7280" : "#d1d5db",
                    color: "white",
                    border: "none",
                    padding: "8px 16px",
                    borderRadius: "0",
                    fontSize: "14px",
                    fontWeight: "600",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.2)"
                  }}
                >
                  After
                </button>
              </div>

              {/* Red indicator dot */}
              <div style={{
                position: "absolute",
                top: "15px",
                right: "15px",
                width: "24px",
                height: "24px",
                backgroundColor: "#dc143c",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 2px 4px rgba(0,0,0,0.2)"
              }}>
                <span style={{ color: "white", fontSize: "14px", fontWeight: "bold" }}>!</span>
              </div>
            </div>

            {/* Content */}
            <div style={{ padding: "24px", flex: 1, display: "flex", flexDirection: "column" }}>
              <h3 style={{ 
                fontSize: "24px", 
                fontWeight: "bold", 
                marginBottom: "16px", 
                color: "#1f2937"
              }}>
                {title}
              </h3>
              
              {description && (
                <p style={{ 
                  color: "#6b7280", 
                  marginBottom: "20px",
                  lineHeight: "1.6"
                }}>
                  {description}
                </p>
              )}

              <ul style={{ 
                margin: "0 0 24px 0", 
                padding: 0, 
                listStyle: "none", 
                flex: 1 
              }}>
                {features.map((feature: any, index: number) => (
                  <li key={index} style={{ 
                    display: "flex", 
                    alignItems: "center", 
                    marginBottom: "12px",
                    color: "#4b5563",
                    fontSize: "15px"
                  }}>
                    <span style={{ 
                      color: "#dc143c", 
                      marginRight: "12px", 
                      fontWeight: "bold",
                      fontSize: "16px"
                    }}>✓</span>
                    {feature.feature || feature}
                  </li>
                ))}
              </ul>
              
              <a 
                href={ctaLink}
                style={{
                  backgroundColor: "#dc143c",
                  color: "white",
                  padding: "14px 24px",
                  borderRadius: "0",
                  textDecoration: "none",
                  textAlign: "center",
                  fontWeight: "600",
                  fontSize: "16px",
                  transition: "all 0.3s ease",
                  border: "none",
                  cursor: "pointer"
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = "#b91c1c";
                  e.currentTarget.style.transform = "translateY(-1px)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = "#dc143c";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                {ctaText}
              </a>
            </div>
          </div>
        );
      },
    },
    StatsSection: {
      fields: {
        title: { type: "text" },
        subtitle: { type: "textarea" },
        stats: { 
          type: "array",
          arrayFields: {
            number: { type: "text" },
            label: { type: "text" },
            description: { type: "text" }
          }
        },
        backgroundColor: { type: "text" },
        additionalText: { type: "textarea" },
        ctaText: { type: "text" },
        ctaLink: { type: "text" },
      },
      defaultProps: {
        title: "Why Choose New York Sash",
        subtitle: "Family-owned and operated since 1988, serving Central New York with unmatched expertise",
        stats: [],
        backgroundColor: "#1a1a1a",
        additionalText: "",
        ctaText: "",
        ctaLink: "",
      },
      render: ({ title, subtitle, stats, backgroundColor, additionalText, ctaText, ctaLink }) => {
        const isDarkBackground = backgroundColor === "#1a1a1a" || backgroundColor === "#2a2a2a" || backgroundColor === "#dc143c";
        const isLightBackground = backgroundColor === "#f9fafb" || backgroundColor === "#ffffff";
        const isRedBackground = backgroundColor === "#dc143c";
        
        return (
          <div style={{ 
            background: backgroundColor,
            color: isDarkBackground ? "white" : "#1a1a1a",
            padding: "4rem 2rem"
          }}>
            <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
              <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "1rem", color: isDarkBackground ? "white" : "#1a1a1a" }}>
                  {title}
                </h2>
                <p style={{ fontSize: "1.125rem", color: isDarkBackground ? "white" : "#666", opacity: isDarkBackground ? 0.95 : 1 }}>
                  {subtitle}
                </p>
              </div>
              <div style={{ 
                display: "grid",
                gridTemplateColumns: stats.length === 3 ? "repeat(3, 1fr)" : stats.length === 4 ? "repeat(4, 1fr)" : "repeat(5, 1fr)",
                gap: isRedBackground ? "2rem" : "3rem",
                marginBottom: additionalText || ctaText ? "2rem" : "3rem"
              }}>
                {stats.map((stat: any, index: number) => (
                  <div key={index} style={{ 
                    textAlign: "center",
                    padding: isRedBackground ? "1.5rem" : "2rem",
                    backgroundColor: isRedBackground ? "rgba(0,0,0,0.1)" : (isDarkBackground ? "rgba(255,255,255,0.05)" : "transparent"),
                    borderRadius: "0.5rem"
                  }}>
                    {isLightBackground ? (
                      // Light background style with circular badges
                      <>
                        <div style={{ 
                          width: "80px",
                          height: "80px",
                          borderRadius: "50%",
                          backgroundColor: "#dc143c",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          margin: "0 auto 1rem",
                          fontSize: "2rem"
                        }}>
                          {stat.number}
                        </div>
                        <div style={{ fontSize: "1.125rem", fontWeight: "700", marginBottom: "0.5rem", color: "#1a1a1a" }}>
                          {stat.label}
                        </div>
                        <div style={{ color: "#666", fontSize: "0.9rem", lineHeight: "1.5" }}>
                          {stat.description}
                        </div>
                      </>
                    ) : (
                      // Dark background style with large red/white numbers
                      <>
                        <div style={{ fontSize: isRedBackground ? "1.5rem" : "3.5rem", fontWeight: "bold", color: isRedBackground ? "white" : "#dc143c", marginBottom: "0.75rem" }}>
                          {stat.number}
                        </div>
                        <div style={{ fontSize: isRedBackground ? "1rem" : "1.25rem", fontWeight: "600", marginBottom: "0.5rem", color: "white" }}>
                          {stat.label}
                        </div>
                        {stat.description && (
                          <div style={{ color: isRedBackground ? "rgba(255,255,255,0.9)" : "#ccc", fontSize: "0.95rem" }}>
                            {stat.description}
                          </div>
                        )}
                      </>
                    )}
                  </div>
                ))}
              </div>
              {additionalText && (
                <div style={{ textAlign: "center", color: isDarkBackground ? "white" : "#1a1a1a", marginBottom: ctaText ? "1.5rem" : "0" }}>
                  <p style={{ fontSize: "16px", margin: "20px 0" }}>
                    {additionalText}
                  </p>
                </div>
              )}
              {ctaText && ctaLink && (
                <div style={{ textAlign: "center" }}>
                  <a
                    href={ctaLink}
                    style={{
                      display: "inline-block",
                      backgroundColor: "white",
                      color: "#dc143c",
                      padding: "0.875rem 2rem",
                      borderRadius: "0.375rem",
                      fontSize: "1rem",
                      fontWeight: "600",
                      textDecoration: "none",
                      transition: "transform 0.2s"
                    }}
                  >
                    {ctaText}
                  </a>
                </div>
              )}
            </div>
          </div>
        );
      },
    },
    TestimonialCard: {
      fields: {
        name: { type: "text" },
        location: { type: "text" },
        service: { type: "text" },
        testimonial: { type: "textarea" },
        videoUrl: { type: "text" },
      },
      defaultProps: {
        name: "Customer Name",
        location: "City, NY",
        service: "Service Type",
        testimonial: "Customer testimonial goes here...",
        videoUrl: "",
      },
      render: ({ name, location, service, testimonial, videoUrl }) => (
        <div style={{ 
          background: "white",
          borderRadius: "0",
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          overflow: "hidden",
          height: "100%"
        }}>
          {videoUrl && (
            <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
              <iframe
                src={videoUrl}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  border: "none"
                }}
                title={`${name} Testimonial`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}
          <div style={{ padding: "1.5rem" }}>
            <h3 style={{ fontSize: "1.2rem", fontWeight: "bold", marginBottom: "0.5rem", color: "#333" }}>
              {name} - {location}
            </h3>
            <p style={{ fontSize: "0.9rem", color: "#dc143c", marginBottom: "1rem", fontWeight: "600" }}>
              {service}
            </p>
            <p style={{ color: "#666", lineHeight: "1.6" }}>
              "{testimonial}"
            </p>
          </div>
        </div>
      ),
    },
    ServiceAreas: {
      fields: {
        title: { type: "text" },
        subtitle: { type: "textarea" },
        areas: { 
          type: "array",
          arrayFields: {
            name: { type: "text" },
            population: { type: "text" }
          }
        },
        additionalText: { type: "textarea" },
      },
      defaultProps: {
        title: "Serving Central New York",
        subtitle: "Proudly serving communities throughout Central New York with expert home improvement services",
        areas: [],
        additionalText: "Also serving surrounding communities",
      },
      render: ({ title, subtitle, areas, additionalText }) => (
        <div style={{ 
          background: "#dc143c",
          color: "white",
          padding: "3.375rem 2rem 2.75rem 2rem"
        }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "1rem" }}>
                {title}
              </h2>
              <p style={{ fontSize: "1.2rem", opacity: 0.9 }}>
                {subtitle}
              </p>
            </div>
            <div className="service-areas-grid" style={{ 
              display: "grid",
              gridTemplateColumns: "repeat(6, 1fr)",
              gap: "1.5rem",
              marginBottom: "3rem"
            }}>
              <style>{`
                @media (max-width: 1024px) {
                  .service-areas-grid {
                    grid-template-columns: repeat(3, 1fr) !important;
                  }
                }
                @media (max-width: 640px) {
                  .service-areas-grid {
                    grid-template-columns: repeat(1, 1fr) !important;
                  }
                }
              `}</style>
              {areas.map((area: any, index: number) => (
                <div key={index} style={{ 
                  textAlign: "center",
                  padding: "0.875rem 1.5rem 0.25rem 1.5rem",
                  backgroundColor: "white",
                  color: "#333",
                  borderRadius: "0"
                }}>
                  <div style={{ 
                    backgroundColor: "#dc143c",
                    borderRadius: "50%",
                    width: "32px",
                    height: "32px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 1rem auto"
                  }}>
                    📍
                  </div>
                  <h3 style={{ fontSize: "1.2rem", fontWeight: "bold", marginBottom: "0.5rem" }}>
                    {area.name}
                  </h3>
                  <p style={{ color: "#666" }}>
                    Population: {area.population}
                  </p>
                </div>
              ))}
            </div>
            <div style={{ textAlign: "center" }}>
              <p style={{ fontSize: "1.1rem", marginBottom: "1.5rem" }}>
                {additionalText}
              </p>
            </div>
          </div>
        </div>
      ),
    },
    TextBlock: {
      fields: {
        content: { type: "textarea" },
        alignment: { 
          type: "select", 
          options: [
            { label: "Left", value: "left" },
            { label: "Center", value: "center" },
            { label: "Right", value: "right" }
          ] 
        },
      },
      defaultProps: {
        content: "Your text content goes here...",
        alignment: "left" as const,
      },
      render: ({ content, alignment }) => (
        <div style={{ 
          padding: "2rem",
          textAlign: alignment,
          maxWidth: "800px",
          margin: alignment === "center" ? "0 auto" : "0"
        }}>
          <p style={{ 
            fontSize: "1.1rem", 
            lineHeight: "1.7", 
            color: "#555",
            whiteSpace: "pre-wrap"
          }}>
            {content}
          </p>
        </div>
      ),
    },
    ImageGallery: {
      fields: {
        images: { 
          type: "array",
          arrayFields: {
            src: { type: "text" },
            alt: { type: "text" },
            caption: { type: "text" },
          }
        },
        columns: { 
          type: "select",
          options: [
            { label: "2 Columns", value: 2 },
            { label: "3 Columns", value: 3 },
            { label: "4 Columns", value: 4 }
          ]
        },
      },
      defaultProps: {
        images: [],
        columns: 3 as const,
      },
      render: ({ images, columns }) => (
        <div style={{ padding: "2rem" }}>
          <div style={{ 
            display: "grid",
            gridTemplateColumns: `repeat(${columns}, 1fr)`,
            gap: "1rem"
          }}>
            {images.map((image, index) => (
              <div key={index} style={{ textAlign: "center" }}>
                <img 
                  src={image.src || "https://via.placeholder.com/300x200"} 
                  alt={image.alt || `Gallery image ${index + 1}`}
                  style={{ 
                    width: "100%", 
                    height: "200px", 
                    objectFit: "cover",
                    borderRadius: "0"
                  }}
                />
                {image.caption && (
                  <p style={{ marginTop: "0.5rem", fontSize: "0.9rem", color: "#666" }}>
                    {image.caption}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      ),
    },
    ContactSection: {
      fields: {
        title: { type: "text" },
        phone: { type: "text" },
        email: { type: "text" },
        address: { type: "textarea" },
      },
      defaultProps: {
        title: "Contact Us",
        phone: "(315) 624-7344",
        email: "info@sashny.com",
        address: "349 Oriskany Boulevard, Whitesboro, NY\nMonday-Friday: 8am-8pm | Saturday: 8am-5pm",
      },
      render: ({ title, phone, email, address }) => (
        <div style={{ 
          background: "#f8f9fa",
          padding: "3rem 2rem",
          textAlign: "center"
        }}>
          <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "2rem", color: "#333" }}>
            {title}
          </h2>
          <div style={{ 
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "2rem",
            maxWidth: "800px",
            margin: "0 auto"
          }}>
            <div>
              <h3 style={{ fontSize: "1.2rem", fontWeight: "600", marginBottom: "0.5rem", color: "#333" }}>
                📞 Phone
              </h3>
              <p style={{ fontSize: "1.1rem", color: "#666" }}>{phone}</p>
            </div>
            <div>
              <h3 style={{ fontSize: "1.2rem", fontWeight: "600", marginBottom: "0.5rem", color: "#333" }}>
                ✉️ Email
              </h3>
              <p style={{ fontSize: "1.1rem", color: "#666" }}>{email}</p>
            </div>
            <div>
              <h3 style={{ fontSize: "1.2rem", fontWeight: "600", marginBottom: "0.5rem", color: "#333" }}>
                📍 Location & Hours
              </h3>
              <p style={{ fontSize: "1.1rem", color: "#666", whiteSpace: "pre-wrap" }}>{address}</p>
            </div>
          </div>
        </div>
      ),
    },
    CallToAction: {
      fields: {
        title: { type: "text" },
        description: { type: "textarea" },
        buttonText: { type: "text" },
        buttonLink: { type: "text" },
        secondaryButtonText: { type: "text" },
        secondaryButtonLink: { type: "text" },
        backgroundColor: { type: "text" },
      },
      defaultProps: {
        title: "Ready to Get Started?",
        description: "Contact us today for a free estimate on your next project.",
        buttonText: "Get Free Estimate",
        buttonLink: "/contact",
        secondaryButtonText: "(315) 624-7344",
        secondaryButtonLink: "tel:+13156247344",
        backgroundColor: "#ffffff",
      },
      render: ({ title, description, buttonText, buttonLink, secondaryButtonText, secondaryButtonLink, backgroundColor }) => (
        <div style={{ 
          background: backgroundColor,
          color: backgroundColor === "#ffffff" ? "#333" : "white",
          padding: "3rem 2rem",
          textAlign: "center"
        }}>
          <div style={{
            maxWidth: "900px",
            margin: "0 auto"
          }}>
            <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "1rem" }}>
              {title}
            </h2>
            <p style={{ fontSize: "1.2rem", marginBottom: "2rem", opacity: 0.9 }}>
              {description}
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <a 
                href={buttonLink}
                style={{
                  display: "inline-block",
                  backgroundColor: "#dc143c",
                  color: "white",
                  padding: "1rem 2rem",
                  fontSize: "1.1rem",
                  fontWeight: "600",
                  textDecoration: "none",
                  borderRadius: "0",
                  transition: "background-color 0.3s ease"
                }}
              >
                {buttonText}
              </a>
              {secondaryButtonText && (
                <a 
                  href={secondaryButtonLink}
                  style={{
                    display: "inline-block",
                    backgroundColor: "#333",
                    color: "white",
                    padding: "1rem 2rem",
                    fontSize: "1.1rem",
                    fontWeight: "600",
                    textDecoration: "none",
                    borderRadius: "0",
                    transition: "background-color 0.3s ease"
                  }}
                >
                  {secondaryButtonText}
                </a>
              )}
            </div>
          </div>
        </div>
      ),
    },
    ServicesGrid: {
      fields: {
        title: { type: "text" },
        subtitle: { type: "textarea" },
        services: { 
          type: "array",
          arrayFields: {
            title: { type: "text" },
            beforeImage: { type: "text" },
            afterImage: { type: "text" },
            features: { 
              type: "array",
              arrayFields: {
                feature: { type: "text" }
              }
            },
            ctaText: { type: "text" },
            ctaLink: { type: "text" },
            description: { type: "textarea" }
          }
        },
      },
      defaultProps: {
        title: "Our Premium Services",
        subtitle: "Serving Central New York with expert installation and superior products backed by our family-owned commitment to quality",
        services: [
          {
            title: "Windows",
            beforeImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&crop=center",
            afterImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop&crop=center",
            features: ["Fusion welded frames", "LowE with Argon gas", "ENERGY STAR certified", "Custom manufactured"],
            ctaText: "Learn More",
            ctaLink: "/windows",
            description: "Transform your home with energy-efficient windows that reduce costs and enhance comfort."
          },
          {
            title: "Siding",
            beforeImage: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&h=300&fit=crop&crop=center",
            afterImage: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400&h=300&fit=crop&crop=center",
            features: ["Insulated vinyl siding", "Maintenance-free", "ENERGY STAR rated", "Lifetime warranty"],
            ctaText: "Learn More",
            ctaLink: "/siding",
            description: "Protect and beautify your home with durable, weather-resistant siding solutions."
          },
          {
            title: "Bathroom Remodeling",
            beforeImage: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=400&h=300&fit=crop&crop=center",
            afterImage: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400&h=300&fit=crop&crop=center",
            features: ["Acrylic bath liners", "Walk-in tubs", "Tub-to-shower conversions", "2-day installation"],
            ctaText: "Learn More",
            ctaLink: "/baths",
            description: "Complete bathroom transformations with modern fixtures and expert craftsmanship."
          },
          {
            title: "Entry Doors",
            beforeImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop&crop=center",
            afterImage: "https://images.unsplash.com/photo-1571055107559-3e67626fa8be?w=400&h=300&fit=crop&crop=center",
            features: ["Fiberglass & steel", "Decorative glass options", "Enhanced security", "Energy efficient"],
            ctaText: "Learn More",
            ctaLink: "/doors",
            description: "Secure, stylish entry doors that make a great first impression."
          }
        ],
      },
      render: ({ title, subtitle, services }) => {
        const ServiceCard = ({ service }: { service: any }) => {
          return (
            <div style={{ 
              background: "white",
              borderRadius: "0",
              boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
              overflow: "hidden",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              border: "1px solid #e5e7eb"
            }}>
              {/* Image Container */}
              <div style={{ 
                position: "relative",
                height: "250px",
                overflow: "hidden",
                backgroundColor: "#f8f9fa"
              }}>
                {/* Service Image */}
                <img 
                  src={service.afterImage || service.beforeImage} 
                  alt={`${service.title} - Transformation`}
                  style={{ 
                    width: "100%", 
                    height: "100%", 
                    objectFit: "cover"
                  }}
                />
              </div>

              {/* Content */}
              <div style={{ padding: "24px", flex: 1, display: "flex", flexDirection: "column" }}>
                <h3 style={{ 
                  fontSize: "24px", 
                  fontWeight: "bold", 
                  marginBottom: "16px", 
                  color: "#1f2937"
                }}>
                  {service.title}
                </h3>
                
                <ul style={{ 
                  margin: "0 0 24px 0", 
                  padding: 0, 
                  listStyle: "none", 
                  flex: 1 
                }}>
                  {service.features.map((feature: any, index: number) => (
                    <li key={index} style={{ 
                      display: "flex", 
                      alignItems: "center", 
                      marginBottom: "12px",
                      color: "#4b5563",
                      fontSize: "15px"
                    }}>
                      <span style={{ 
                        color: "#dc143c", 
                        marginRight: "12px", 
                        fontWeight: "bold",
                        fontSize: "16px"
                      }}>✓</span>
                      {feature.feature || feature}
                    </li>
                  ))}
                </ul>
                
                <a 
                  href={service.ctaLink}
                  style={{
                    backgroundColor: "#dc143c",
                    color: "white",
                    padding: "14px 24px",
                    borderRadius: "0",
                    textDecoration: "none",
                    textAlign: "center",
                    fontWeight: "600",
                    fontSize: "16px",
                    transition: "all 0.3s ease",
                    border: "none",
                    cursor: "pointer"
                  }}
                >
                  {service.ctaText}
                </a>
              </div>
            </div>
          );
        };

        return (
          <div style={{ 
            background: "#ffffff",
            padding: "4rem 2rem"
          }}>
            <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
              <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "1rem", color: "#1f2937" }}>
                  {title}
                </h2>
                <p style={{ fontSize: "1.2rem", color: "#6b7280", maxWidth: "800px", margin: "0 auto" }}>
                  {subtitle}
                </p>
              </div>
              <div className="before-after-services">
                {services.map((service: any, index: number) => (
                  <ServiceCard key={index} service={service} />
                ))}
              </div>
            </div>
          </div>
        );
      },
    },
    TestimonialsGrid: {
      fields: {
        title: { type: "text" },
        subtitle: { type: "textarea" },
        testimonials: { 
          type: "array",
          arrayFields: {
            name: { type: "text" },
            location: { type: "text" },
            service: { type: "text" },
            testimonial: { type: "textarea" },
            videoUrl: { type: "text" }
          }
        },
      },
      defaultProps: {
        title: "What Our Customers Say",
        subtitle: "Real experiences from satisfied homeowners throughout Central New York",
        testimonials: [
          {
            name: "Sarah Johnson",
            location: "Syracuse, NY",
            service: "Window Replacement",
            testimonial: "New York Sash did an amazing job replacing all the windows in our home. The quality is exceptional and the installation team was professional and clean. Our energy bills have already decreased significantly!"
          },
          {
            name: "Mike Rodriguez",
            location: "Utica, NY",
            service: "Bathroom Remodel",
            testimonial: "We're thrilled with our new bathroom! The team at New York Sash transformed our outdated space into a beautiful, functional room. The attention to detail was impressive."
          },
          {
            name: "Jennifer Davis",
            location: "Rome, NY",
            service: "Siding Installation",
            testimonial: "Our home looks brand new after the siding installation. The crew was punctual, respectful, and did excellent work. Highly recommend New York Sash for any home improvement project."
          }
        ],
      },
      render: ({ title, subtitle, testimonials }) => {
        const TestimonialCard = ({ testimonial }: { testimonial: any }) => {
          return (
            <div style={{ 
              background: "white",
              borderRadius: "8px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
              overflow: "hidden",
              height: "100%",
              display: "flex",
              flexDirection: "column"
            }}>
              {/* Video or Image Placeholder */}
              <div style={{ 
                position: "relative", 
                paddingBottom: "56.25%", 
                height: 0,
                backgroundColor: "#2b2b2b"
              }}>
                {testimonial.videoUrl ? (
                  <iframe
                    src={testimonial.videoUrl}
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      border: "none"
                    }}
                    title={`${testimonial.name} Testimonial`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <div style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#2b2b2b",
                    color: "#888"
                  }}>
                    <div style={{ textAlign: "center" }}>
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor" style={{ marginBottom: "8px" }}>
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
                        <circle cx="12" cy="12" r="3" fill="currentColor"/>
                      </svg>
                      <div style={{ fontSize: "14px" }}>Video unavailable</div>
                      <div style={{ fontSize: "12px" }}>This video is private</div>
                    </div>
                  </div>
                )}
              </div>
              
              <div style={{ padding: "1.5rem", flex: 1, display: "flex", flexDirection: "column" }}>
                <h3 style={{ 
                  fontSize: "1.1rem", 
                  fontWeight: "bold", 
                  marginBottom: "0.25rem", 
                  color: "#1f2937" 
                }}>
                  {testimonial.name} - {testimonial.location}
                </h3>
                <p style={{ 
                  fontSize: "0.9rem", 
                  color: "#666", 
                  marginBottom: "1rem",
                  fontStyle: "italic"
                }}>
                  {testimonial.service}
                </p>
                <p style={{ 
                  color: "#4b5563", 
                  lineHeight: "1.6",
                  fontSize: "0.95rem",
                  fontStyle: "italic"
                }}>
                  "{testimonial.testimonial}"
                </p>
              </div>
            </div>
          );
        };

        return (
          <div style={{ 
            background: "white",
            padding: "4rem 2rem"
          }}>
            <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
              <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "0.5rem", color: "#1f2937" }}>
                  {title}
                </h2>
                {subtitle && (
                  <p style={{ fontSize: "1.125rem", color: "#6b7280" }}>
                    {subtitle}
                  </p>
                )}
              </div>
              <div className="testimonials-grid">
                {testimonials.map((testimonial: any, index: number) => (
                  <TestimonialCard key={index} testimonial={testimonial} />
                ))}
              </div>
            </div>
          </div>
        );
      },
    },
    WindowsHero: {
      fields: {
        title: { type: "text" },
        subtitle: { type: "textarea" },
        badge: { type: "text" },
        ctaText: { type: "text" },
        ctaLink: { type: "text" },
        secondaryCtaText: { type: "text" },
        secondaryCtaLink: { type: "text" },
        features: {
          type: "array",
          arrayFields: {
            icon: { type: "text" },
            title: { type: "text" },
            description: { type: "text" },
          },
        },
        videoUrl: { type: "text" },
        backgroundImages: {
          type: "array",
          arrayFields: {
            src: { type: "text" },
          },
        },
      },
      defaultProps: {
        title: "Experience the Window Revolution",
        subtitle: "Transform your home with our premium fusion-welded windows. Superior energy efficiency, enhanced comfort, and timeless beauty designed specifically for Central New York homes.",
        badge: "ENERGY STAR® Certified Windows",
        ctaText: "Schedule Free Consultation",
        ctaLink: "/contact",
        secondaryCtaText: "(315) 624-7344",
        secondaryCtaLink: "tel:315-624-7344",
        features: [
          {
            icon: "✓",
            title: "Fusion Welded Frames",
            description: "Superior strength and insulation"
          },
          {
            icon: "✓",
            title: "LowE Glass",
            description: "Advanced UV protection"
          },
          {
            icon: "✓",
            title: "Argon Gas Filled",
            description: "Enhanced insulation"
          },
          {
            icon: "✓",
            title: "Lifetime Warranty",
            description: "Peace of mind guarantee"
          }
        ],
        videoUrl: "https://www.youtube.com/embed/_ToUrLnN0w4",
        backgroundImages: [],
      },
      render: ({ title, subtitle, badge, ctaText, ctaLink, secondaryCtaText, secondaryCtaLink, features, videoUrl, backgroundImages }) => (
        <section style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden"
        }}>
          {/* Background */}
          <div style={{
            position: "absolute",
            inset: "0",
            background: backgroundImages.length > 0 
              ? `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.6))`
              : "linear-gradient(135deg, #1a1a1a 0%, #333 100%)",
          }}>
            {/* Grid Pattern Overlay */}
            <div style={{
              position: "absolute",
              inset: "0",
              backgroundImage: `
                linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                radial-gradient(circle at 20px 20px, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: "20px 20px, 20px 20px, 20px 20px",
              pointerEvents: "none"
            }}></div>
            {backgroundImages.length > 0 && (
              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "1rem",
                opacity: "0.2",
                filter: "blur(2px)",
                height: "100vh"
              }}>
                {backgroundImages.slice(0, 3).map((img: any, index: number) => (
                  <img 
                    key={index}
                    src={img.src || img}
                    alt=""
                    style={{
                      width: "100%",
                      height: "100vh",
                      objectFit: "cover"
                    }}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Content */}
          <div style={{
            position: "relative",
            zIndex: 10,
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 1.5rem",
            width: "100%"
          }}>
            <div style={{
              display: "grid",
              gridTemplateColumns: videoUrl ? "1fr 1fr" : "1fr",
              gap: "3rem",
              alignItems: "center"
            }}>
              <div style={{ color: "white" }}>
                <div style={{
                  display: "inline-block",
                  backgroundColor: "#dc143c",
                  padding: "0.5rem 1rem",
                  borderRadius: "9999px",
                  fontSize: "0.875rem",
                  fontWeight: "600",
                  marginBottom: "1.5rem"
                }}>
                  {badge}
                </div>
                <h1 style={{
                  fontSize: "3rem",
                  fontWeight: "bold",
                  marginBottom: "1.5rem",
                  lineHeight: "1.2"
                }}>
                  {title.includes("Window Revolution") ? (
                    <>
                      Experience the<br />
                      <span style={{ color: "#dc143c" }}>Window Revolution</span>
                    </>
                  ) : title}
                </h1>
                <p style={{
                  fontSize: "1.25rem",
                  marginBottom: "2rem",
                  color: "#d1d5db",
                  lineHeight: "1.6"
                }}>
                  {subtitle}
                </p>
                
                {/* Features Grid */}
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: "1.5rem",
                  marginBottom: "2rem"
                }}>
                  {features.map((feature: any, index: number) => (
                    <div key={index} style={{
                      backgroundColor: "rgba(255,255,255,0.1)",
                      borderRadius: "0.5rem",
                      padding: "1rem"
                    }}>
                      <div style={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "0.5rem"
                      }}>
                        <span style={{
                          color: "#dc143c",
                          fontSize: "1.5rem",
                          marginRight: "0.5rem"
                        }}>
                          {feature.icon}
                        </span>
                        <h3 style={{ fontWeight: "600", margin: 0 }}>
                          {feature.title}
                        </h3>
                      </div>
                      <p style={{
                        color: "#d1d5db",
                        fontSize: "0.875rem",
                        margin: 0
                      }}>
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "1rem"
                }}>
                  <a
                    href={ctaLink}
                    style={{
                      backgroundColor: "#dc143c",
                      color: "white",
                      padding: "1rem 2rem",
                      borderRadius: "0.5rem",
                      fontSize: "1.125rem",
                      fontWeight: "600",
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                      transition: "background-color 0.3s"
                    }}
                  >
                    {ctaText}
                    <svg style={{
                      width: "1.25rem",
                      height: "1.25rem",
                      marginLeft: "0.5rem"
                    }} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                    </svg>
                  </a>
                  <a
                    href={secondaryCtaLink}
                    style={{
                      backgroundColor: "white",
                      color: "#1a1a1a",
                      padding: "1rem 2rem",
                      borderRadius: "0.5rem",
                      fontSize: "1.125rem",
                      fontWeight: "600",
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                      transition: "background-color 0.3s"
                    }}
                  >
                    <svg style={{
                      width: "1.25rem",
                      height: "1.25rem",
                      marginRight: "0.5rem"
                    }} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                    </svg>
                    {secondaryCtaText}
                  </a>
                </div>
              </div>

              {/* Video Section */}
              {videoUrl && (
                <div>
                  <div style={{ position: "relative" }}>
                    <div style={{
                      position: "absolute",
                      top: "-5rem",
                      left: "-5rem",
                      width: "10rem",
                      height: "10rem",
                      backgroundColor: "#dc143c",
                      borderRadius: "50%",
                      opacity: "0.2",
                      filter: "blur(2rem)"
                    }}></div>
                    <div style={{
                      position: "absolute",
                      bottom: "-5rem",
                      right: "-5rem",
                      width: "10rem",
                      height: "10rem",
                      backgroundColor: "#dc143c",
                      borderRadius: "50%",
                      opacity: "0.2",
                      filter: "blur(2rem)"
                    }}></div>
                    <div style={{
                      backgroundColor: "rgba(255,255,255,0.1)",
                      backdropFilter: "blur(10px)",
                      borderRadius: "0.5rem",
                      padding: "2rem",
                      position: "relative"
                    }}>
                      <iframe
                        style={{
                          width: "100%",
                          borderRadius: "0.5rem",
                          boxShadow: "0 10px 25px rgba(0,0,0,0.3)"
                        }}
                        height="315"
                        src={videoUrl}
                        title="Fusion Welded Window Technology"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        loading="lazy"
                      ></iframe>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      ),
    },
    WindowsFeatures: {
      fields: {
        title: { type: "text" },
        subtitle: { type: "text" },
        features: {
          type: "array",
          arrayFields: {
            icon: { type: "text" },
            title: { type: "text" },
            description: { type: "text" },
            items: {
              type: "array",
              arrayFields: {
                item: { type: "text" },
              },
            },
          },
        },
      },
      defaultProps: {
        title: "Premium Features & Benefits",
        subtitle: "Our windows are custom-engineered for Central New York homes",
        features: [
          {
            icon: "⚡",
            title: "Energy Efficient Design",
            description: "Advanced energy efficiency features",
            items: [
              "LowE glass with Argon gas",
              "Exceeds ENERGY STAR® requirements", 
              "Superior insulation value"
            ]
          },
          {
            icon: "🛡️",
            title: "Superior Construction",
            description: "Built to last with premium materials",
            items: [
              "Fusion welded frames & sashes",
              "Stainless steel balance system",
              "Custom sized to fit any opening"
            ]
          },
          {
            icon: "🔧",
            title: "Easy Maintenance",
            description: "Designed for convenience",
            items: [
              "Tilt-in sashes for easy cleaning",
              "Dual vent locks for security",
              "Half screen for ventilation"
            ]
          }
        ],
      },
      render: ({ title, subtitle, features }) => (
        <section style={{
          padding: "5rem 0",
          backgroundColor: "white"
        }}>
          <div style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 1.5rem"
          }}>
            <div style={{
              textAlign: "center",
              marginBottom: "4rem"
            }}>
              <h2 style={{
                fontSize: "2.5rem",
                fontWeight: "bold",
                marginBottom: "1rem",
                color: "#1f2937"
              }}>
                {title}
              </h2>
              <p style={{
                fontSize: "1.25rem",
                color: "#6b7280"
              }}>
                {subtitle}
              </p>
            </div>
            
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "2rem"
            }}>
              {features.map((feature: any, index: number) => (
                <div key={index} style={{
                  backgroundColor: "#f9fafb",
                  borderRadius: "0.5rem",
                  padding: "2rem"
                }}>
                  <div style={{
                    color: "#dc143c",
                    fontSize: "3rem",
                    marginBottom: "1rem",
                    textAlign: "center"
                  }}>
                    {feature.icon.startsWith('/') || feature.icon.startsWith('./') ? (
                      <img 
                        src={feature.icon} 
                        alt={feature.title}
                        style={{
                          width: "3rem",
                          height: "3rem",
                          objectFit: "contain"
                        }}
                      />
                    ) : (
                      feature.icon
                    )}
                  </div>
                  <h3 style={{
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    marginBottom: "1rem",
                    color: "#1f2937"
                  }}>
                    {feature.title}
                  </h3>
                  <ul style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0
                  }}>
                    {feature.items?.map((item: any, itemIndex: number) => (
                      <li key={itemIndex} style={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "0.75rem",
                        color: "#6b7280"
                      }}>
                        <svg style={{
                          width: "1.25rem",
                          height: "1.25rem",
                          color: "#dc143c",
                          marginRight: "0.5rem",
                          flexShrink: 0
                        }} fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      ),
    },
    WindowsInstallation: {
      fields: {
        title: { type: "text" },
        subtitle: { type: "text" },
        description: { type: "textarea" },
        processTitle: { type: "text" },
        processSteps: {
          type: "array",
          arrayFields: {
            item: { type: "text" },
          },
        },
        videoUrl: { type: "text" },
      },
      defaultProps: {
        title: "Year-Round Installation Available",
        subtitle: "Professional installation in any season",
        description: "Don't wait for warmer weather - our certified installers use special techniques to install windows in any season while protecting your home from the elements.",
        processTitle: "Our Winter Installation Process:",
        processSteps: [
          "Room-by-room installation to minimize heat loss",
          "Complete one window before moving to next", 
          "Special weatherization techniques"
        ],
        videoUrl: "https://www.youtube.com/embed/_kYToIDvzfU",
      },
      render: ({ title, subtitle, description, processTitle, processSteps, videoUrl }) => (
        <section style={{
          padding: "5rem 0",
          backgroundColor: "#f9fafb"
        }}>
          <div style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 1.5rem"
          }}>
            <div style={{
              display: "grid",
              gridTemplateColumns: videoUrl ? "1fr 1fr" : "1fr",
              gap: "3rem",
              alignItems: "center"
            }}>
              <div>
                <h2 style={{
                  fontSize: "2.5rem",
                  fontWeight: "bold",
                  marginBottom: "1.5rem",
                  color: "#1f2937"
                }}>
                  {title}
                </h2>
                <p style={{
                  fontSize: "1.25rem",
                  color: "#6b7280",
                  marginBottom: "2rem",
                  lineHeight: "1.6"
                }}>
                  {description}
                </p>
                <div style={{
                  backgroundColor: "white",
                  borderRadius: "0.5rem",
                  padding: "1.5rem",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
                }}>
                  <h3 style={{
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    marginBottom: "1rem",
                    color: "#1f2937"
                  }}>
                    {processTitle}
                  </h3>
                  <ul style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0
                  }}>
                    {processSteps.map((step: any, index: number) => (
                      <li key={index} style={{
                        display: "flex",
                        alignItems: "flex-start",
                        marginBottom: "1rem"
                      }}>
                        <svg style={{
                          width: "1.5rem",
                          height: "1.5rem",
                          color: "#dc143c",
                          marginRight: "0.5rem",
                          marginTop: "0.25rem",
                          flexShrink: 0
                        }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span style={{ color: "#374151" }}>
                          {step}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {videoUrl && (
                <div>
                  <div style={{
                    backgroundColor: "white",
                    borderRadius: "0.5rem",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    overflow: "hidden"
                  }}>
                    <iframe
                      style={{
                        width: "100%",
                        aspectRatio: "16/9"
                      }}
                      src={videoUrl}
                      title="Winter Window Installation"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                    ></iframe>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      ),
    },
    WindowsTestimonials: {
      fields: {
        title: { type: "text" },
        subtitle: { type: "text" },
        testimonials: {
          type: "array",
          arrayFields: {
            name: { type: "text" },
            location: { type: "text" },
            description: { type: "text" },
            videoUrl: { type: "text" },
          },
        },
      },
      defaultProps: {
        title: "What Our Customers Say",
        subtitle: "Hear from homeowners throughout Central New York",
        testimonials: [
          {
            name: "Sarah H.",
            location: "Utica, NY",
            description: "Sarah from Utica shares her experience with our window installation",
            videoUrl: "https://www.youtube.com/embed/7eLjAxEJCuU"
          },
          {
            name: "Joe B.",
            location: "Sauquoit, NY", 
            description: "Joe discusses his window replacement project",
            videoUrl: "https://www.youtube.com/embed/FF1r77f850c"
          },
          {
            name: "Raymond & Laura B.",
            location: "New Hartford, NY",
            description: "Raymond and Laura talk about their energy savings",
            videoUrl: "https://www.youtube.com/embed/I9Gm7wyXTIo"
          }
        ],
      },
      render: ({ title, subtitle, testimonials }) => (
        <section style={{
          padding: "5rem 0",
          backgroundColor: "white"
        }}>
          <div style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 1.5rem"
          }}>
            <div style={{
              textAlign: "center",
              marginBottom: "4rem"
            }}>
              <h2 style={{
                fontSize: "2.5rem",
                fontWeight: "bold",
                marginBottom: "1rem",
                color: "#1f2937"
              }}>
                {title}
              </h2>
              <p style={{
                fontSize: "1.25rem",
                color: "#6b7280"
              }}>
                {subtitle}
              </p>
            </div>
            
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "2rem"
            }}>
              {testimonials.map((testimonial: any, index: number) => (
                <div key={index} style={{
                  backgroundColor: "#f9fafb",
                  borderRadius: "0.5rem",
                  padding: "2rem"
                }}>
                  <div style={{
                    aspectRatio: "16/9",
                    marginBottom: "1.5rem"
                  }}>
                    <iframe
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "0.5rem"
                      }}
                      src={testimonial.videoUrl}
                      title={`Customer Testimonial - ${testimonial.location}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                    ></iframe>
                  </div>
                  <p style={{
                    color: "#6b7280",
                    marginBottom: "1rem",
                    lineHeight: "1.5"
                  }}>
                    {testimonial.description}
                  </p>
                  <p style={{
                    fontWeight: "600",
                    color: "#1f2937"
                  }}>
                    {testimonial.name} - {testimonial.location}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ),
    },
    AboutHero: {
      fields: {
        title: { type: "text" },
        subtitle: { type: "textarea" },
        badge: { type: "text" },
        ctaText: { type: "text" },
        ctaLink: { type: "text" },
        secondaryCtaText: { type: "text" },
        secondaryCtaLink: { type: "text" },
        stats: {
          type: "array",
          arrayFields: {
            number: { type: "text" },
            label: { type: "text" },
          },
        },
        videoUrl: { type: "text" },
      },
      defaultProps: {
        title: "Building Trust for Over 35 Years",
        subtitle: "From our humble beginnings to becoming Central New York's most trusted home improvement company, our commitment to quality and customer satisfaction remains unchanged.",
        badge: "Serving Central New York Since 1988",
        ctaText: "Meet Our Team",
        ctaLink: "#team",
        secondaryCtaText: "Visit Showroom",
        secondaryCtaLink: "#showroom",
        stats: [
          { number: "35+", label: "Years of Excellence" },
          { number: "10K+", label: "Projects Completed" },
          { number: "4.9★", label: "Customer Rating" },
          { number: "50+", label: "Communities Served" }
        ],
        videoUrl: "https://www.youtube.com/embed/mWuLqrQ-rIU",
      },
      render: ({ title, subtitle, badge, ctaText, ctaLink, secondaryCtaText, secondaryCtaLink, stats, videoUrl }) => (
        <section style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden"
        }}>
          {/* Background */}
          <div style={{
            position: "absolute",
            inset: "0",
            background: "linear-gradient(135deg, #1a1a1a 0%, #333 100%)",
          }}>
            <div style={{
              position: "absolute",
              inset: "0",
              backgroundImage: `
                linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                radial-gradient(circle at 20px 20px, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: "20px 20px, 20px 20px, 20px 20px"
            }}></div>
          </div>

          {/* Content */}
          <div style={{
            position: "relative",
            zIndex: 10,
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 1.5rem",
            width: "100%"
          }}>
            <div style={{
              display: "grid",
              gridTemplateColumns: videoUrl ? "1fr 1fr" : "1fr",
              gap: "3rem",
              alignItems: "center"
            }}>
              <div style={{ color: "white" }}>
                <div style={{
                  display: "inline-block",
                  backgroundColor: "#dc143c",
                  padding: "0.5rem 1rem",
                  borderRadius: "9999px",
                  fontSize: "0.875rem",
                  fontWeight: "600",
                  marginBottom: "1.5rem"
                }}>
                  {badge}
                </div>
                <h1 style={{
                  fontSize: "3rem",
                  fontWeight: "bold",
                  marginBottom: "1.5rem",
                  lineHeight: "1.2"
                }}>
                  {title.includes("Over 35 Years") ? (
                    <>
                      Building Trust for<br />
                      <span style={{ color: "#dc143c" }}>Over 35 Years</span>
                    </>
                  ) : title}
                </h1>
                <p style={{
                  fontSize: "1.25rem",
                  marginBottom: "2rem",
                  color: "#d1d5db",
                  lineHeight: "1.6"
                }}>
                  {subtitle}
                </p>
                
                {/* Stats Grid */}
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: "1.5rem",
                  marginBottom: "2rem"
                }}>
                  {stats.map((stat: any, index: number) => (
                    <div key={index} style={{
                      textAlign: "center",
                      backgroundColor: "rgba(255,255,255,0.1)",
                      borderRadius: "0.5rem",
                      padding: "1.5rem"
                    }}>
                      <div style={{
                        fontSize: "2.5rem",
                        fontWeight: "bold",
                        color: "#dc143c",
                        marginBottom: "0.5rem"
                      }}>
                        {stat.number}
                      </div>
                      <p style={{
                        color: "#d1d5db",
                        margin: 0
                      }}>
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "1rem"
                }}>
                  <a
                    href={ctaLink}
                    style={{
                      backgroundColor: "#dc143c",
                      color: "white",
                      padding: "1rem 2rem",
                      borderRadius: "0.5rem",
                      fontSize: "1.125rem",
                      fontWeight: "600",
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                      transition: "background-color 0.3s"
                    }}
                  >
                    {ctaText}
                    <svg style={{
                      width: "1.25rem",
                      height: "1.25rem",
                      marginLeft: "0.5rem"
                    }} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                    </svg>
                  </a>
                  <a
                    href={secondaryCtaLink}
                    style={{
                      backgroundColor: "white",
                      color: "#1a1a1a",
                      padding: "1rem 2rem",
                      borderRadius: "0.5rem",
                      fontSize: "1.125rem",
                      fontWeight: "600",
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                      transition: "background-color 0.3s"
                    }}
                  >
                    <svg style={{
                      width: "1.25rem",
                      height: "1.25rem",
                      marginRight: "0.5rem"
                    }} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd"/>
                    </svg>
                    {secondaryCtaText}
                  </a>
                </div>
              </div>

              {/* Video and Badges Section */}
              {videoUrl && (
                <div>
                  <div style={{ position: "relative" }}>
                    <div style={{
                      position: "absolute",
                      top: "-5rem",
                      left: "-5rem",
                      width: "10rem",
                      height: "10rem",
                      backgroundColor: "#dc143c",
                      borderRadius: "50%",
                      opacity: "0.2",
                      filter: "blur(2rem)"
                    }}></div>
                    <div style={{
                      position: "absolute",
                      bottom: "-5rem",
                      right: "-5rem",
                      width: "10rem",
                      height: "10rem",
                      backgroundColor: "#dc143c",
                      borderRadius: "50%",
                      opacity: "0.2",
                      filter: "blur(2rem)"
                    }}></div>
                    <div style={{
                      backgroundColor: "rgba(255,255,255,0.1)",
                      backdropFilter: "blur(10px)",
                      borderRadius: "0.5rem",
                      padding: "2rem",
                      position: "relative"
                    }}>
                      <div style={{
                        aspectRatio: "16/9",
                        borderRadius: "0.5rem",
                        overflow: "hidden",
                        marginBottom: "2rem"
                      }}>
                        <iframe
                          style={{
                            width: "100%",
                            height: "100%"
                          }}
                          src={videoUrl}
                          title="About New York Sash"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          loading="lazy"
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      ),
    },
    CompanyOverview: {
      fields: {
        title: { type: "text" },
        description: { type: "textarea" },
        additionalText: { type: "textarea" },
        image: { type: "text" },
        stats: {
          type: "array",
          arrayFields: {
            number: { type: "text" },
            label: { type: "text" },
          },
        },
      },
      defaultProps: {
        title: "Your Trusted Local Partner",
        description: "For over four decades, New York Sash has been Central New York's premier home improvement company. What started as a small family business has grown into the region's most trusted name for windows, siding, bathrooms, and entry doors.",
        additionalText: "We understand that your home is your most important investment. That's why we're committed to providing the highest quality products, expert installation, and exceptional customer service that has earned us thousands of satisfied customers and an A+ rating with the Better Business Bureau.",
        image: "https://placehold.co/600x400/000000/FFFFFF?text=Company+Building",
        stats: [
          { number: "5,000+", label: "Homes Transformed" },
          { number: "45+", label: "Years Experience" },
          { number: "100%", label: "Satisfaction Guarantee" },
          { number: "A+", label: "BBB Rating" }
        ],
      },
      render: ({ title, description, additionalText, image, stats }) => (
        <section style={{
          padding: "5rem 0",
          backgroundColor: "white"
        }}>
          <div style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 1rem"
          }}>
            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "3rem",
              alignItems: "center"
            }}>
              <div>
                <h2 style={{
                  fontSize: "2.5rem",
                  fontWeight: "bold",
                  marginBottom: "1.5rem",
                  color: "#1f2937"
                }}>
                  {title}
                </h2>
                <p style={{
                  fontSize: "1.25rem",
                  color: "#374151",
                  marginBottom: "1.5rem",
                  lineHeight: "1.6"
                }}>
                  {description}
                </p>
                <p style={{
                  fontSize: "1.125rem",
                  color: "#374151",
                  marginBottom: "1.5rem",
                  lineHeight: "1.6"
                }}>
                  {additionalText}
                </p>
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: "1.5rem"
                }}>
                  {stats.map((stat: any, index: number) => (
                    <div key={index} style={{ textAlign: "center" }}>
                      <div style={{
                        fontSize: "1.875rem",
                        fontWeight: "bold",
                        color: "#dc143c"
                      }}>
                        {stat.number}
                      </div>
                      <div style={{ color: "#6b7280" }}>
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <img
                  src={image}
                  alt="New York Sash Building"
                  style={{
                    width: "100%",
                    borderRadius: "0.5rem",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.15)"
                  }}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>
      ),
    },
    CompanyTimeline: {
      fields: {
        title: { type: "text" },
        subtitle: { type: "text" },
        timelineItems: {
          type: "array",
          arrayFields: {
            year: { type: "text" },
            title: { type: "text" },
            description: { type: "textarea" },
          },
        },
      },
      defaultProps: {
        title: "Our Story",
        subtitle: "From humble beginnings to regional leader - see how we've grown while maintaining our commitment to quality and service.",
        timelineItems: [
          {
            year: "1979",
            title: "Company Founded",
            description: "New York Sash was established as a family-owned business with a simple mission: provide quality home improvement products and exceptional service to Central New York homeowners."
          },
          {
            year: "1985",
            title: "First Showroom Opens",
            description: "Opened our first showroom in Whitesboro, NY, allowing customers to see and touch our products before making decisions. This hands-on approach became a cornerstone of our business."
          },
          {
            year: "1995",
            title: "Expanding Services",
            description: "Added bathroom remodeling and entry door installation to our services, becoming a full-service home improvement company."
          },
          {
            year: "2000",
            title: "ENERGY STAR Partnership",
            description: "Became an ENERGY STAR partner, focusing on energy-efficient products that help homeowners save money and reduce environmental impact."
          },
          {
            year: "2010",
            title: "Advanced Installation Training",
            description: "Implemented comprehensive training programs for our installation teams, ensuring every project meets the highest standards of quality and craftsmanship."
          },
          {
            year: "2020",
            title: "Digital Innovation",
            description: "Embraced digital tools and virtual consultations to better serve customers while maintaining our personal touch and commitment to excellence."
          },
          {
            year: "Today",
            title: "Leading the Industry",
            description: "Continuing to lead Central New York's home improvement industry with innovative products, expert installation, and unmatched customer service."
          }
        ],
      },
      render: ({ title, subtitle, timelineItems }) => (
        <section style={{
          padding: "5rem 0",
          backgroundColor: "#1a1a1a",
          color: "white",
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            radial-gradient(circle at 20px 20px, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px, 20px 20px, 20px 20px",
          position: "relative"
        }}>
          <div style={{
            maxWidth: "1000px",
            margin: "0 auto",
            padding: "0 1rem",
            position: "relative",
            zIndex: 10
          }}>
            <div style={{
              textAlign: "center",
              marginBottom: "4rem"
            }}>
              <h2 style={{
                fontSize: "2.5rem",
                fontWeight: "bold",
                marginBottom: "1.5rem"
              }}>
                {title}
              </h2>
              <p style={{
                fontSize: "1.25rem",
                color: "#d1d5db",
                maxWidth: "750px",
                margin: "0 auto"
              }}>
                {subtitle}
              </p>
            </div>
            
            <div>
              {timelineItems.map((item: any, index: number) => (
                <div key={index} style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "2rem"
                }}>
                  <div style={{
                    flexShrink: 0,
                    width: "5rem",
                    height: "5rem",
                    backgroundColor: "#dc143c",
                    color: "white",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "bold",
                    fontSize: "1.125rem",
                    marginRight: "1.5rem"
                  }}>
                    {item.year}
                  </div>
                  <div>
                    <h3 style={{
                      fontSize: "1.5rem",
                      fontWeight: "bold",
                      marginBottom: "0.5rem"
                    }}>
                      {item.title}
                    </h3>
                    <p style={{
                      color: "#d1d5db",
                      margin: 0,
                      lineHeight: "1.6"
                    }}>
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ),
    },
    CoreValues: {
      fields: {
        title: { type: "text" },
        subtitle: { type: "text" },
        values: {
          type: "array",
          arrayFields: {
            icon: { type: "text" },
            title: { type: "text" },
            description: { type: "text" },
          },
        },
      },
      defaultProps: {
        title: "Our Core Values",
        subtitle: "These principles guide everything we do and ensure every customer receives the exceptional experience they deserve.",
        values: [
          {
            icon: "🤝",
            title: "Integrity",
            description: "We believe in honest communication, fair pricing, and always doing what's right for our customers."
          },
          {
            icon: "⭐",
            title: "Quality",
            description: "We use only the finest products and employ skilled craftsmen who take pride in their work."
          },
          {
            icon: "💬",
            title: "Service",
            description: "Every customer interaction is an opportunity to exceed expectations and build lasting relationships."
          },
          {
            icon: "🏠",
            title: "Community",
            description: "We're proud to be part of Central New York and support our local communities."
          },
          {
            icon: "🔧",
            title: "Expertise",
            description: "Continuous training and education ensure our team stays at the forefront of industry innovations."
          },
          {
            icon: "🌱",
            title: "Sustainability",
            description: "We promote energy-efficient solutions that benefit both our customers and the environment."
          }
        ],
      },
      render: ({ title, subtitle, values }) => (
        <section style={{
          padding: "5rem 0",
          backgroundColor: "white"
        }}>
          <div style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 1rem"
          }}>
            <div style={{
              textAlign: "center",
              marginBottom: "4rem"
            }}>
              <h2 style={{
                fontSize: "2.5rem",
                fontWeight: "bold",
                marginBottom: "1.5rem",
                color: "#1f2937"
              }}>
                {title}
              </h2>
              <p style={{
                fontSize: "1.25rem",
                color: "#6b7280",
                maxWidth: "750px",
                margin: "0 auto"
              }}>
                {subtitle}
              </p>
            </div>
            
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "2rem"
            }}>
              {values.map((value: any, index: number) => (
                <div key={index} style={{
                  backgroundColor: "#f9fafb",
                  padding: "2rem",
                  borderRadius: "0.75rem",
                  textAlign: "center"
                }}>
                  <div style={{
                    fontSize: "3.125rem",
                    color: "#dc143c",
                    marginBottom: "1rem"
                  }}>
                    {value.icon}
                  </div>
                  <h3 style={{
                    fontSize: "1.25rem",
                    fontWeight: "bold",
                    marginBottom: "1rem",
                    color: "#1f2937"
                  }}>
                    {value.title}
                  </h3>
                  <p style={{
                    color: "#374151",
                    margin: 0,
                    lineHeight: "1.6"
                  }}>
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ),
    },
    CertificationsAwards: {
      fields: {
        title: { type: "text" },
        subtitle: { type: "text" },
        certifications: {
          type: "array",
          arrayFields: {
            image: { type: "text" },
            title: { type: "text" },
            description: { type: "text" },
          },
        },
      },
      defaultProps: {
        title: "Certifications & Recognition",
        subtitle: "Our commitment to excellence has earned us industry recognition and the trust of our customers.",
        certifications: [
          {
            image: "https://placehold.co/150x100/000000/FFFFFF?text=BBB+A%2B",
            title: "Better Business Bureau",
            description: "A+ Rating"
          },
          {
            image: "https://placehold.co/150x100/000000/FFFFFF?text=ENERGY+STAR",
            title: "ENERGY STAR",
            description: "Certified Partner"
          },
          {
            image: "https://placehold.co/150x100/000000/FFFFFF?text=Licensed",
            title: "Licensed",
            description: "Fully Licensed Contractor"
          },
          {
            image: "https://placehold.co/150x100/000000/FFFFFF?text=Insured",
            title: "Insured",
            description: "Comprehensive Coverage"
          }
        ],
      },
      render: ({ title, subtitle, certifications }) => (
        <section style={{
          padding: "5rem 0",
          backgroundColor: "#f3f4f6"
        }}>
          <div style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 1rem"
          }}>
            <div style={{
              textAlign: "center",
              marginBottom: "4rem"
            }}>
              <h2 style={{
                fontSize: "2.5rem",
                fontWeight: "bold",
                marginBottom: "1.5rem",
                color: "#1f2937"
              }}>
                {title}
              </h2>
              <p style={{
                fontSize: "1.25rem",
                color: "#6b7280",
                maxWidth: "750px",
                margin: "0 auto"
              }}>
                {subtitle}
              </p>
            </div>
            
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "2rem"
            }}>
              {certifications.map((cert: any, index: number) => (
                <div key={index} style={{
                  backgroundColor: "white",
                  padding: "1.5rem",
                  borderRadius: "0.75rem",
                  textAlign: "center",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
                }}>
                  <img
                    src={cert.image}
                    alt={cert.title}
                    style={{
                      width: "6rem",
                      height: "4rem",
                      margin: "0 auto 1rem",
                      objectFit: "contain"
                    }}
                    loading="lazy"
                  />
                  <h3 style={{
                    fontWeight: "bold",
                    color: "#1f2937",
                    marginBottom: "0.5rem"
                  }}>
                    {cert.title}
                  </h3>
                  <p style={{
                    color: "#6b7280",
                    margin: 0
                  }}>
                    {cert.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ),
    },
    TeamSection: {
      fields: {
        title: { type: "text" },
        subtitle: { type: "text" },
        teamMembers: {
          type: "array",
          arrayFields: {
            name: { type: "text" },
            position: { type: "text" },
            role: { type: "text" },
            description: { type: "text" },
            image: { type: "text" },
          },
        },
      },
      defaultProps: {
        title: "Meet Our Team",
        subtitle: "Dedicated professionals who bring expertise, passion, and personal attention to every project.",
        teamMembers: [
          {
            name: "Sales Manager",
            position: "Lead Consultant",
            role: "Sales Manager",
            description: "Over 15 years helping homeowners choose the perfect solutions for their homes.",
            image: "https://placehold.co/200x200/000000/FFFFFF?text=Team+Member"
          },
          {
            name: "Installation Manager",
            position: "Master Craftsman",
            role: "Installation Manager",
            description: "20+ years of installation expertise ensuring every project exceeds expectations.",
            image: "https://placehold.co/200x200/000000/FFFFFF?text=Team+Member"
          },
          {
            name: "Customer Service Manager",
            position: "Customer Advocate",
            role: "Customer Service Manager",
            description: "Dedicated to ensuring every customer has an exceptional experience from start to finish.",
            image: "https://placehold.co/200x200/000000/FFFFFF?text=Team+Member"
          }
        ],
      },
      render: ({ title, subtitle, teamMembers }) => (
        <section style={{
          padding: "5rem 0",
          backgroundColor: "#1a1a1a",
          color: "white",
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            radial-gradient(circle at 20px 20px, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px, 20px 20px, 20px 20px",
          position: "relative"
        }}>
          <div style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 1rem",
            position: "relative",
            zIndex: 10
          }}>
            <div style={{
              textAlign: "center",
              marginBottom: "4rem"
            }}>
              <h2 style={{
                fontSize: "2.5rem",
                fontWeight: "bold",
                marginBottom: "1.5rem"
              }}>
                {title}
              </h2>
              <p style={{
                fontSize: "1.25rem",
                color: "#d1d5db",
                maxWidth: "750px",
                margin: "0 auto"
              }}>
                {subtitle}
              </p>
            </div>
            
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "2rem"
            }}>
              {teamMembers.map((member: any, index: number) => (
                <div key={index} style={{
                  backgroundColor: "white",
                  color: "#1f2937",
                  borderRadius: "0.75rem",
                  padding: "1.5rem",
                  textAlign: "center"
                }}>
                  <img
                    src={member.image}
                    alt={member.name}
                    style={{
                      width: "8rem",
                      height: "8rem",
                      borderRadius: "50%",
                      margin: "0 auto 1rem",
                      objectFit: "cover"
                    }}
                    loading="lazy"
                  />
                  <h3 style={{
                    fontSize: "1.25rem",
                    fontWeight: "bold",
                    marginBottom: "0.5rem"
                  }}>
                    {member.name}
                  </h3>
                  <p style={{
                    color: "#dc143c",
                    fontWeight: "600",
                    marginBottom: "0.75rem"
                  }}>
                    {member.position}
                  </p>
                  <p style={{
                    color: "#374151",
                    margin: 0,
                    lineHeight: "1.6"
                  }}>
                    {member.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ),
    },
    CommunityInvolvement: {
      fields: {
        title: { type: "text" },
        subtitle: { type: "text" },
        description: { type: "text" },
        activities: {
          type: "array",
          arrayFields: {
            activity: { type: "text" },
          },
        },
        image: { type: "text" },
      },
      defaultProps: {
        title: "Community Commitment",
        subtitle: "We're proud to support our Central New York communities through sponsorships, charitable giving, and volunteer work.",
        description: "Supporting Our Neighbors",
        activities: [
          "Annual sponsorship of local youth sports teams",
          "Donations to Habitat for Humanity builds",
          "Support for local schools and educational programs",
          "Emergency home repairs for seniors and veterans",
          "Participation in community festivals and events"
        ],
  image: "/images/misc/community-image.jpeg",
      },
      render: ({ title, subtitle, description, activities, image }) => (
        <section style={{
          padding: "5rem 0",
          backgroundColor: "white"
        }}>
          <div style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 1rem"
          }}>
            <div style={{
              textAlign: "center",
              marginBottom: "4rem"
            }}>
              <h2 style={{
                fontSize: "2.5rem",
                fontWeight: "bold",
                marginBottom: "1.5rem",
                color: "#1f2937"
              }}>
                {title}
              </h2>
              <p style={{
                fontSize: "1.25rem",
                color: "#6b7280",
                maxWidth: "750px",
                margin: "0 auto"
              }}>
                {subtitle}
              </p>
            </div>
            
            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "3rem",
              alignItems: "center"
            }}>
              <div>
                <h3 style={{
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  marginBottom: "1.5rem",
                  color: "#1f2937"
                }}>
                  {description}
                </h3>
                <ul style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0
                }}>
                  {activities.map((activity: any, index: number) => (
                    <li key={index} style={{
                      display: "flex",
                      alignItems: "flex-start",
                      marginBottom: "1rem",
                      fontSize: "1.125rem",
                      color: "#374151"
                    }}>
                      <span style={{
                        color: "#dc143c",
                        marginRight: "0.75rem",
                        fontSize: "1.5rem",
                        lineHeight: "1"
                      }}>
                        •
                      </span>
                      {activity.activity || activity}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <img
                  src={image}
                  alt="Community Involvement"
                  style={{
                    width: "100%",
                    borderRadius: "0.5rem",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
                    marginBottom: "2rem"
                  }}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>
      ),
    },
    FeaturesWithImage: {
      fields: {
        title: { type: "text" },
        features: {
          type: "array",
          arrayFields: {
            feature: { type: "text" },
          },
        },
        imageUrl: { type: "text" },
        badgeText: { type: "text" },
        backgroundColor: { type: "text" },
      },
      defaultProps: {
        title: "What Sets Us Apart",
        features: [
          "Family-owned and operated since 1988",
          "EPA certified lead-safe installation practices",
          "Custom manufactured products for perfect fit",
          "Year-round installation capability",
          "Comprehensive warranties and guarantees",
          "Local Central New York expertise"
        ],
        imageUrl: "/images/team/epa-certified-team.jpg",
        badgeText: "EPA Certified",
        backgroundColor: "#1a1a1a",
      },
      render: ({ title, features, imageUrl, badgeText, backgroundColor }) => (
        <section style={{
          padding: "1.75rem 2rem 5rem 2rem",
          backgroundColor: backgroundColor || "#1a1a1a"
        }}>
          <div style={{
            maxWidth: "1400px",
            margin: "0 auto"
          }}>
            <h2 style={{
              fontSize: "2.5rem",
              fontWeight: "bold",
              marginBottom: "3rem",
              color: "white",
              textAlign: "center"
            }}>
              {title}
            </h2>
            
            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "4rem",
              alignItems: "center"
            }}>
              <div>
                <ul style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0
                }}>
                  {features.map((feature: any, index: number) => (
                    <li key={index} style={{
                      display: "flex",
                      alignItems: "flex-start",
                      marginBottom: "1.25rem",
                      fontSize: "1.125rem",
                      color: "white"
                    }}>
                      <span style={{
                        color: "#dc143c",
                        marginRight: "0.75rem",
                        fontSize: "1.25rem",
                        fontWeight: "bold",
                        lineHeight: "1.5"
                      }}>
                        ✓
                      </span>
                      <span>{feature.feature || feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{
                position: "relative",
                textAlign: "center"
              }}>
                <img
                  src={imageUrl}
                  alt={title}
                  style={{
                    width: "100%",
                    maxWidth: "500px",
                    borderRadius: "0.5rem",
                    boxShadow: "0 10px 40px rgba(0,0,0,0.3)"
                  }}
                  loading="lazy"
                />
                {badgeText && (
                  <div style={{
                    position: "absolute",
                    bottom: "2rem",
                    right: "2rem",
                    backgroundColor: "#dc143c",
                    color: "white",
                    padding: "0.75rem 1.5rem",
                    borderRadius: "0",
                    fontSize: "1rem",
                    fontWeight: "600",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.3)"
                  }}>
                    {badgeText}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      ),
    },
    SidingHero: {
      fields: {
        title: { type: "text" },
        subtitle: { type: "textarea" },
        badge: { type: "text" },
        ctaText: { type: "text" },
        ctaLink: { type: "text" },
        secondaryCtaText: { type: "text" },
        secondaryCtaLink: { type: "text" },
        features: {
          type: "array",
          arrayFields: {
            icon: { type: "text" },
            title: { type: "text" },
            description: { type: "text" },
          },
        },
        videoUrl: { type: "text" },
        colorSwatches: {
          type: "array",
          arrayFields: {
            name: { type: "text" },
            color: { type: "text" },
            image: { type: "text" },
          },
        },
      },
      defaultProps: {
        title: "Elevate Your Home's Protection & Style",
        subtitle: "Transform your home's exterior with our premium siding solutions. Engineered for Central New York weather, combining lasting beauty with superior protection and energy efficiency.",
        badge: "Premium Vinyl & Insulated Siding Solutions",
        ctaText: "Get Expert Consultation",
        ctaLink: "/contact",
        secondaryCtaText: "(315) 624-7344",
        secondaryCtaLink: "tel:+13156247344",
        features: [
          {
            icon: "✓",
            title: "Maintenance-Free",
            description: "Never needs painting"
          },
          {
            icon: "✓",
            title: "Weather Resistant",
            description: "Built for NY climate"
          },
          {
            icon: "✓",
            title: "Energy Efficient",
            description: "Superior insulation"
          },
          {
            icon: "✓",
            title: "Lifetime Warranty",
            description: "Guaranteed protection"
          }
        ],
        videoUrl: "",
        colorSwatches: [
          { name: "Arctic White", color: "#FFFFFF", image: "/images/colors/white.jpg" },
          { name: "Coastal Gray", color: "#C8D3DC", image: "/images/colors/gray.jpg" },
          { name: "Naval Blue", color: "#1E3A8A", image: "/images/colors/blue.jpg" }
        ],
      },
      render: ({ title, subtitle, badge, ctaText, ctaLink, secondaryCtaText, secondaryCtaLink, features, videoUrl, colorSwatches }) => (
        <section style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          background: "linear-gradient(135deg, #1a1a1a 0%, #333 100%)"
        }}>
          {/* Grid Pattern Overlay */}
          <div style={{
            position: "absolute",
            inset: "0",
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
              radial-gradient(circle at 20px 20px, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "20px 20px, 20px 20px, 20px 20px",
            pointerEvents: "none"
          }}></div>
          
          {/* Content */}
          <div style={{
            position: "relative",
            zIndex: 10,
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "0 2rem",
            width: "100%"
          }}>
            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "4rem",
              alignItems: "center"
            }}>
              {/* Left Column */}
              <div style={{ color: "white" }}>
                <div style={{
                  display: "inline-block",
                  backgroundColor: "#dc143c",
                  padding: "0.5rem 1rem",
                  borderRadius: "9999px",
                  fontSize: "0.875rem",
                  fontWeight: "600",
                  marginBottom: "1.5rem"
                }}>
                  {badge}
                </div>
                <h1 style={{
                  fontSize: "3rem",
                  fontWeight: "bold",
                  marginBottom: "1.5rem",
                  lineHeight: "1.2"
                }}>
                  {title.includes("Protection & Style") ? (
                    <>
                      Elevate Your Home's<br />
                      <span style={{ color: "#dc143c" }}>Protection & Style</span>
                    </>
                  ) : title}
                </h1>
                <p style={{
                  fontSize: "1.125rem",
                  marginBottom: "2rem",
                  color: "#d1d5db",
                  lineHeight: "1.6"
                }}>
                  {subtitle}
                </p>
                
                {/* Features Grid */}
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: "1rem",
                  marginBottom: "2rem"
                }}>
                  {features.map((feature: any, index: number) => (
                    <div key={index} style={{
                      backgroundColor: "rgba(255,255,255,0.1)",
                      borderRadius: "0.5rem",
                      padding: "1rem"
                    }}>
                      <div style={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "0.5rem"
                      }}>
                        <span style={{
                          color: "#dc143c",
                          fontSize: "1.25rem",
                          marginRight: "0.5rem",
                          fontWeight: "bold"
                        }}>
                          {feature.icon}
                        </span>
                        <h3 style={{ fontWeight: "600", margin: 0, fontSize: "1rem" }}>
                          {feature.title}
                        </h3>
                      </div>
                      <p style={{
                        color: "#d1d5db",
                        fontSize: "0.875rem",
                        margin: 0
                      }}>
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "1rem"
                }}>
                  <a
                    href={ctaLink}
                    style={{
                      backgroundColor: "#dc143c",
                      color: "white",
                      padding: "1rem 2rem",
                      borderRadius: "0.5rem",
                      fontSize: "1.125rem",
                      fontWeight: "600",
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                      transition: "background-color 0.3s"
                    }}
                  >
                    {ctaText}
                    <svg style={{
                      width: "1.25rem",
                      height: "1.25rem",
                      marginLeft: "0.5rem"
                    }} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                    </svg>
                  </a>
                  <a
                    href={secondaryCtaLink}
                    style={{
                      backgroundColor: "white",
                      color: "#1a1a1a",
                      padding: "1rem 2rem",
                      borderRadius: "0.5rem",
                      fontSize: "1.125rem",
                      fontWeight: "600",
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                      transition: "background-color 0.3s"
                    }}
                  >
                    <svg style={{
                      width: "1.25rem",
                      height: "1.25rem",
                      marginRight: "0.5rem"
                    }} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                    </svg>
                    {secondaryCtaText}
                  </a>
                </div>
              </div>

              {/* Right Column */}
              <div>
                {/* Video Section */}
                <div style={{
                  backgroundColor: "rgba(255,255,255,0.1)",
                  backdropFilter: "blur(10px)",
                  borderRadius: "0.5rem",
                  padding: "1.5rem",
                  marginBottom: "1.5rem"
                }}>
                  {videoUrl ? (
                    <iframe
                      style={{
                        width: "100%",
                        borderRadius: "0.5rem",
                        boxShadow: "0 10px 25px rgba(0,0,0,0.3)"
                      }}
                      height="315"
                      src={videoUrl}
                      title="Siding Installation Video"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                    ></iframe>
                  ) : (
                    <div style={{
                      backgroundColor: "#2b2b2b",
                      borderRadius: "0.5rem",
                      height: "315px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#888"
                    }}>
                      <div style={{ textAlign: "center" }}>
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor" style={{ marginBottom: "8px" }}>
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
                          <circle cx="12" cy="12" r="3" fill="currentColor"/>
                        </svg>
                        <div style={{ fontSize: "14px" }}>Video unavailable</div>
                        <div style={{ fontSize: "12px" }}>This video is private</div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Color Swatches */}
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "1rem"
                }}>
                  {colorSwatches.map((swatch: any, index: number) => (
                    <div key={index} style={{
                      textAlign: "center"
                    }}>
                      <div style={{
                        backgroundColor: swatch.color,
                        border: swatch.color === "#FFFFFF" ? "1px solid #333" : "none",
                        borderRadius: "0.5rem",
                        aspectRatio: "1",
                        marginBottom: "0.5rem",
                        boxShadow: "0 4px 6px rgba(0,0,0,0.2)"
                      }}></div>
                      <p style={{
                        color: "white",
                        fontSize: "0.875rem",
                        margin: 0
                      }}>
                        {swatch.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ),
    },
    ContactForm: {
      fields: {
        title: { type: "text" },
        subtitle: { type: "textarea" },
        phone: { type: "text" },
        email: { type: "text" },
        address: { type: "textarea" },
      },
      defaultProps: {
        title: "Get Your Free Consultation",
        subtitle: "Ready to transform your home? Fill out the form below and one of our expert consultants will contact you within 24 hours.",
        phone: "(315) 624-7344",
        email: "info@newyorksash.com",
        address: "349 Oriskany Boulevard\nWhitesboro, NY 13492",
      },
      render: ({ title, subtitle, phone, email, address }) => (
        <section style={{
          padding: "5rem 2rem",
          backgroundColor: "#f9fafb"
        }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <h1 style={{ 
                fontSize: "3rem", 
                fontWeight: "bold", 
                marginBottom: "1rem",
                color: "#1a1a1a"
              }}>
                {title}
              </h1>
              <p style={{ 
                fontSize: "1.2rem", 
                color: "#666",
                maxWidth: "800px",
                margin: "0 auto"
              }}>
                {subtitle}
              </p>
            </div>

            <div style={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr",
              gap: "3rem",
              alignItems: "start"
            }}>
              <div style={{
                backgroundColor: "white",
                padding: "2.5rem",
                borderRadius: "0",
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
              }}>
                <form style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
                    <div>
                      <label style={{ 
                        display: "block", 
                        marginBottom: "0.5rem", 
                        fontWeight: "600",
                        color: "#333"
                      }}>
                        First Name *
                      </label>
                      <input 
                        type="text" 
                        required
                        style={{
                          width: "100%",
                          padding: "0.75rem",
                          border: "1px solid #d1d5db",
                          borderRadius: "0.25rem",
                          fontSize: "1rem"
                        }}
                      />
                    </div>
                    <div>
                      <label style={{ 
                        display: "block", 
                        marginBottom: "0.5rem", 
                        fontWeight: "600",
                        color: "#333"
                      }}>
                        Last Name *
                      </label>
                      <input 
                        type="text" 
                        required
                        style={{
                          width: "100%",
                          padding: "0.75rem",
                          border: "1px solid #d1d5db",
                          borderRadius: "0.25rem",
                          fontSize: "1rem"
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ 
                      display: "block", 
                      marginBottom: "0.5rem", 
                      fontWeight: "600",
                      color: "#333"
                    }}>
                      Email *
                    </label>
                    <input 
                      type="email" 
                      required
                      style={{
                        width: "100%",
                        padding: "0.75rem",
                        border: "1px solid #d1d5db",
                        borderRadius: "0.25rem",
                        fontSize: "1rem"
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ 
                      display: "block", 
                      marginBottom: "0.5rem", 
                      fontWeight: "600",
                      color: "#333"
                    }}>
                      Phone *
                    </label>
                    <input 
                      type="tel" 
                      required
                      style={{
                        width: "100%",
                        padding: "0.75rem",
                        border: "1px solid #d1d5db",
                        borderRadius: "0.25rem",
                        fontSize: "1rem"
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ 
                      display: "block", 
                      marginBottom: "0.5rem", 
                      fontWeight: "600",
                      color: "#333"
                    }}>
                      Address
                    </label>
                    <input 
                      type="text" 
                      style={{
                        width: "100%",
                        padding: "0.75rem",
                        border: "1px solid #d1d5db",
                        borderRadius: "0.25rem",
                        fontSize: "1rem"
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ 
                      display: "block", 
                      marginBottom: "0.5rem", 
                      fontWeight: "600",
                      color: "#333"
                    }}>
                      Service Interested In *
                    </label>
                    <select 
                      required
                      style={{
                        width: "100%",
                        padding: "0.75rem",
                        border: "1px solid #d1d5db",
                        borderRadius: "0.25rem",
                        fontSize: "1rem"
                      }}
                    >
                      <option value="">Select a service...</option>
                      <option value="windows">Windows</option>
                      <option value="siding">Siding</option>
                      <option value="bathrooms">Bathroom Remodeling</option>
                      <option value="doors">Entry Doors</option>
                      <option value="multiple">Multiple Services</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ 
                      display: "block", 
                      marginBottom: "0.5rem", 
                      fontWeight: "600",
                      color: "#333"
                    }}>
                      Message
                    </label>
                    <textarea 
                      rows={4}
                      style={{
                        width: "100%",
                        padding: "0.75rem",
                        border: "1px solid #d1d5db",
                        borderRadius: "0.25rem",
                        fontSize: "1rem",
                        resize: "vertical"
                      }}
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <button 
                    type="submit"
                    style={{
                      backgroundColor: "#dc143c",
                      color: "white",
                      padding: "1rem 2rem",
                      border: "none",
                      borderRadius: "0.25rem",
                      fontSize: "1.1rem",
                      fontWeight: "600",
                      cursor: "pointer",
                      transition: "background-color 0.3s"
                    }}
                  >
                    Request Free Consultation
                  </button>
                </form>
              </div>

              <div style={{
                backgroundColor: "white",
                padding: "2rem",
                borderRadius: "0",
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
              }}>
                <h3 style={{ 
                  fontSize: "1.5rem", 
                  fontWeight: "bold", 
                  marginBottom: "1.5rem",
                  color: "#1a1a1a"
                }}>
                  Contact Information
                </h3>

                <div style={{ marginBottom: "1.5rem" }}>
                  <div style={{ 
                    display: "flex", 
                    alignItems: "center", 
                    marginBottom: "0.5rem",
                    color: "#dc143c",
                    fontWeight: "600"
                  }}>
                    📞 Phone
                  </div>
                  <a href={`tel:${phone.replace(/[^0-9]/g, '')}`} style={{
                    color: "#333",
                    textDecoration: "none",
                    fontSize: "1.1rem"
                  }}>
                    {phone}
                  </a>
                </div>

                <div style={{ marginBottom: "1.5rem" }}>
                  <div style={{ 
                    display: "flex", 
                    alignItems: "center", 
                    marginBottom: "0.5rem",
                    color: "#dc143c",
                    fontWeight: "600"
                  }}>
                    ✉️ Email
                  </div>
                  <a href={`mailto:${email}`} style={{
                    color: "#333",
                    textDecoration: "none",
                    fontSize: "1.1rem"
                  }}>
                    {email}
                  </a>
                </div>

                <div>
                  <div style={{ 
                    display: "flex", 
                    alignItems: "center", 
                    marginBottom: "0.5rem",
                    color: "#dc143c",
                    fontWeight: "600"
                  }}>
                    📍 Address
                  </div>
                  <p style={{
                    color: "#333",
                    fontSize: "1.1rem",
                    lineHeight: "1.6",
                    margin: 0,
                    whiteSpace: "pre-line"
                  }}>
                    {address}
                  </p>
                </div>

                <div style={{
                  marginTop: "2rem",
                  paddingTop: "2rem",
                  borderTop: "1px solid #e5e7eb"
                }}>
                  <h4 style={{ 
                    fontSize: "1.2rem", 
                    fontWeight: "bold", 
                    marginBottom: "1rem",
                    color: "#1a1a1a"
                  }}>
                    Business Hours
                  </h4>
                  <div style={{ color: "#666", lineHeight: "1.8" }}>
                    <div><strong>Monday - Friday:</strong> 8am - 8pm</div>
                    <div><strong>Saturday:</strong> 8am - 5pm</div>
                    <div><strong>Sunday:</strong> Closed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ),
    },
  },
};

export default config;
