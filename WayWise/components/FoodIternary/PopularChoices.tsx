import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PopularChoice from './PopularChoice';
import { useRouter } from 'expo-router';
import { useTripStore } from '../../store/tripStore'; // Adjust path

const PopularChoices = () => {
  const [selectedId, setSelectedId] = React.useState<number | null>(null);
  const router = useRouter();
  const destination = useTripStore((state) => state.destination);

  const choices = [
    {
      id: 1,
      name: "The Lalit Ashok",
      location: "Bangalore, Karnataka",
      description: "The LaliT Ashok Bangalore is a five-star luxury hotel nestled in 10 acres of landscaped gardens, offering elegant accommodations.",
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/cd61b4ebde18be45db3df7aebdac40b03f4df00c?placeholderIfAbsent=true&apiKey=c83360269d6d4476a58a4e391fa06aa9",
      bookmarkSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/95af22d16bd69fe1e93807b889f16325f9698472?placeholderIfAbsent=true&apiKey=c83360269d6d4476a58a4e391fa06aa9",
      route: "/lalitashok",
    },
    {
      id: 2,
      name: "Conrad",
      location: "Bangalore, Karnataka",
      description: "Conrad Bengaluru is a 24-story hotel in the Central Business District, offering 285 rooms and suites with panoramic views of Ulsoor Lake.",
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/48a89068e79ee7403c697d526197f42c65cc2cfd?placeholderIfAbsent=true&apiKey=c83360269d6d4476a58a4e391fa06aa9",
      bookmarkSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/acb6456d4ee49e4bda5892a8715b55612692d128?placeholderIfAbsent=true&apiKey=c83360269d6d4476a58a4e391fa06aa9",
      route: "/conrad",
    },
    {
      id: 3,
      name: "1135 AD",
      location: "Jaipur, Rajasthan",
      description: "1135 AD is a fine-dining restaurant set within Amer Fort, offering royal Rajasthani cuisine in a heritage setting.",
      imageSrc: "https://ik.imagekit.io/31g5nprim/5.PNG",
      bookmarkSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/acb6456d4ee49e4bda5892a8715b55612692d128?placeholderIfAbsent=true&apiKey=c83360269d6d4476a58a4e391fa06aa9",
      route: "/1135ad",
    },
    {
      id: 4,
      name: "Johnson's Cafe",
      location: "Manali, Himachal Pradesh",
      description: "Johnson's Cafe is a popular eatery in Old Manali, known for its cozy ambiance and fresh Himalayan trout dishes.",
      imageSrc: "https://ik.imagekit.io/31g5nprim/6.PNG",
      bookmarkSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/acb6456d4ee49e4bda5892a8715b55612692d128?placeholderIfAbsent=true&apiKey=c83360269d6d4476a58a4e391fa06aa9",
      route: "/johnson",
    }
  ];

  // Filter based on destination
  const filteredChoices = destination
    ? choices.filter((c) => c.location.toLowerCase().includes(destination.toLowerCase()))
    : choices;

  return (
    <View>
      <Text style={styles.title}>{'\n'}Popular Choices:</Text>
      {filteredChoices.map((choice) => (
        <PopularChoice
          key={choice.id}
          {...choice}
          isSelected={choice.id === selectedId}
          onSelect={() => setSelectedId(choice.id)}
          onNavigate={
            choice.route ? () => router.push(choice.route as `/lalitashok`) : undefined
          }
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 8,
    alignSelf: 'flex-start',
    marginLeft: 10,
  },
});

export default PopularChoices;
