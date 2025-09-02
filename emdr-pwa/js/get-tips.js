
export default async (req, res) => {
  const tips = [
    "Bilateral stimulering aktiverer begge hjernehalvdeler.",
    "EMDR kan bidra til stressreduksjon og fokus.",
    "Positive tanker styrker mentale reseptorer.",
    "Fokusert oppmerksomhet forbedrer bearbeiding."
  ];

  return res.status(200).json({ tips });
};
