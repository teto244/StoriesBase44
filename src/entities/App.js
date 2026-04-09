import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';

// بيانات تجريبية (سيتم جلبها لاحقاً من Story.json)
const DATA = [
  { id: '1', title: 'قصة الرعب الغامضة', category: 'رعب' },
  { id: '2', title: 'رحلة إلى المريخ', category: 'خيال علمي' },
  { id: '3', title: 'أسرار التاريخ القديم', category: 'تاريخي' },
];

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>تطبيق القصص</Text>
      <FlatList
        data={DATA}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.category}>{item.category}</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>اقرأ الآن</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5', paddingTop: 50, paddingHorizontal: 20 },
  header: { fontSize: 28, fontWeight: 'bold', textAlign: 'center', marginBottom: 20, color: '#333' },
  card: { backgroundColor: '#fff', padding: 20, borderRadius: 15, marginBottom: 15, elevation: 3 },
  title: { fontSize: 18, fontWeight: 'bold', color: '#222' },
  category: { color: '#666', marginTop: 5, marginBottom: 15 },
  button: { backgroundColor: '#007bff', padding: 10, borderRadius: 8, alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: 'bold' }
});
