import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Index = () => {
  const featuredArticle = {
    title: "Global Markets Face Uncertainty Amid Economic Shifts",
    description: "As central banks navigate inflationary pressures and geopolitical tensions rise, investors brace for volatility.",
    image: "/placeholder.svg",
  };

  const latestArticles = [
    { title: "Tech Giants Unveil AI Breakthroughs", category: "Technology" },
    { title: "Climate Summit Reaches Landmark Agreement", category: "Environment" },
    { title: "Global Trade Patterns Shift Amidst New Policies", category: "Economics" },
    { title: "Healthcare Innovation Spurs Investment Surge", category: "Health" },
    { title: "Cultural Trends Reshaping Consumer Behavior", category: "Lifestyle" },
    { title: "Emerging Markets Show Resilience in Q3", category: "Markets" },
  ];

  return (
    <div className="container mx-auto px-4 py-8 bg-background">
      <section className="mb-12">
        <Card className="overflow-hidden">
          <div className="md:flex">
            <div className="md:w-2/3">
              <img src={featuredArticle.image} alt="Featured Article" className="h-64 w-full object-cover md:h-full" />
            </div>
            <div className="md:w-1/3 p-6">
              <CardHeader>
                <CardTitle className="text-2xl font-bold mb-2">{featuredArticle.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{featuredArticle.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button>Read More</Button>
              </CardFooter>
            </div>
          </div>
        </Card>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">Latest Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestArticles.map((article, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">{article.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <img src="/placeholder.svg" alt={article.title} className="w-full h-40 object-cover mb-4" />
                <CardDescription>{article.category}</CardDescription>
              </CardContent>
              <CardFooter className="mt-auto">
                <Button variant="outline" className="w-full">Read Article</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;