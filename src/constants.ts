export const postCategories = [
    { name: "sleep", displayName: "Sleep", content: "Achieve your dreams" },
    { name: "happiness", displayName: "Happiness", content: "Find joy in life" },
    { name: "productivity", displayName: "Productivity", content: "Supercharge your day" },
    { name: "connection", displayName: "Connection", content: "Nurture your relationships" },
    { name: "nutrition", displayName: "Nutrition", content: "You are what you eat" },
    { name: "finance", displayName: "Finance", content: "Find financial freedom" },
    { name: "mind", displayName: "Mind", content: "Boost your brainpower" },
    { name: "learning", displayName: "Learning", content: "Expand your horizons" }
] as const

export type postCategoryName = typeof postCategories[number]["name"]
