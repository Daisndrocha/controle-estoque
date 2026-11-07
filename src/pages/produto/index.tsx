
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Produto() {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [preco, setPreco] = useState('');

  function cadastrarProduto() {
    if (!nome.trim() || !quantidade.trim() || !preco.trim()) {
      Alert.alert('Atenção', 'Preencha os campos obrigatórios.');
      return;
    }

    Alert.alert(
      'Sucesso',
      'Produto cadastrado visualmente com sucesso!'
    );
  }

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.container}
    >
      <View style={styles.intro}>
        <View style={styles.iconBox}>
          <Ionicons name="cube-outline" size={30} color="#1769AA" />
        </View>

        <Text style={styles.title}>Novo Produto</Text>

        <Text style={styles.subtitle}>
          Adicione um novo produto ao seu controle de estoque.
        </Text>
      </View>

      <View style={styles.form}>
        <Text style={styles.sectionTitle}>
          Informações do produto
        </Text>

        <Text style={styles.label}>Nome do produto *</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: Notebook Dell"
          value={nome}
          onChangeText={setNome}
        />

        <Text style={styles.label}>Descrição</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Descreva o produto"
          value={descricao}
          onChangeText={setDescricao}
          multiline
        />

        <Text style={styles.label}>Quantidade *</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: 10"
          value={quantidade}
          onChangeText={setQuantidade}
          keyboardType="numeric"
        />

        <Text style={styles.label}>Preço unitário (R$) *</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: 150,00"
          value={preco}
          onChangeText={setPreco}
          keyboardType="decimal-pad"
        />

        <TouchableOpacity
          style={styles.button}
          onPress={cadastrarProduto}
        >
          <Ionicons name="add-circle-outline" size={21} color="#FFFFFF" />
          <Text style={styles.buttonText}>Cadastrar Produto</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F4F6FA',
  },
  container: {
    padding: 22,
    paddingBottom: 35,
  },
  intro: {
    marginBottom: 22,
  },
  iconBox: {
    backgroundColor: '#E0EDFA',
    width: 55,
    height: 55,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#17365D',
  },
  subtitle: {
    fontSize: 14,
    color: '#667085',
    marginTop: 7,
  },
  form: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: '#EAECF0',
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#17365D',
    marginBottom: 8,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#344054',
    marginTop: 17,
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D0D5DD',
    borderRadius: 9,
    padding: 13,
    fontSize: 15,
    color: '#344054',
  },
  textArea: {
    height: 90,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#1769AA',
    padding: 16,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 9,
    marginTop: 28,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
