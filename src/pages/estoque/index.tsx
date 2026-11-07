
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import StatusEstoque from '../../components/StatusEstoque';

import {
  listarProdutos,
  verificarStatus,
  contarProdutos,
  contarUnidades,
  contarEstoqueBaixo,
} from '../../controllers/estoqueController';

export default function Estoque() {
  const produtos = listarProdutos();

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.container}
    >
      <View style={styles.intro}>
        <View style={styles.iconBox}>
          <Ionicons
            name="cube-outline"
            size={30}
            color="#1769AA"
          />
        </View>

        <Text style={styles.title}>Controle de Estoque</Text>

        <Text style={styles.subtitle}>
          Acompanhe a disponibilidade dos seus produtos.
        </Text>
      </View>

      <View style={styles.summary}>
        <View style={styles.summaryCard}>
          <Ionicons name="layers-outline" size={23} color="#1769AA" />
          <Text style={styles.summaryNumber}>
            {contarProdutos()}
          </Text>
          <Text style={styles.summaryLabel}>
            Produtos
          </Text>
        </View>

        <View style={styles.summaryCard}>
          <Ionicons name="cube-outline" size={23} color="#16A34A" />
          <Text style={styles.summaryNumber}>
            {contarUnidades()}
          </Text>
          <Text style={styles.summaryLabel}>
            Unidades
          </Text>
        </View>

        <View style={styles.summaryCard}>
          <Ionicons name="alert-circle-outline" size={23} color="#D97706" />
          <Text style={styles.summaryNumber}>
            {contarEstoqueBaixo()}
          </Text>
          <Text style={styles.summaryLabel}>
            Estoque baixo
          </Text>
        </View>
      </View>

      <View style={styles.listHeader}>
        <Text style={styles.listTitle}>
          Produtos cadastrados
        </Text>

        <Text style={styles.listSubtitle}>
          {produtos.length} itens
        </Text>
      </View>

      {produtos.map((produto) => (
        <View key={produto.id} style={styles.productCard}>
          <View style={styles.productTop}>
            <View style={styles.productIcon}>
              <Ionicons
                name="cube-outline"
                size={23}
                color="#1769AA"
              />
            </View>

            <View style={styles.productInfo}>
              <Text style={styles.productName}>
                {produto.nome}
              </Text>

              <Text style={styles.productDescription}>
                {produto.descricao}
              </Text>
            </View>
          </View>

          <View style={styles.productBottom}>
            <View>
              <Text style={styles.quantityLabel}>
                Quantidade disponível
              </Text>

              <Text style={styles.quantity}>
                {produto.quantidade} unidades
              </Text>
            </View>

            <StatusEstoque
              status={verificarStatus(produto.quantidade)}
            />
          </View>
        </View>
      ))}

      <View style={styles.footer}>
        <Ionicons
          name="information-circle-outline"
          size={19}
          color="#667085"
        />

        <Text style={styles.footerText}>
          Estoque baixo: quantidade igual ou inferior a 5 unidades.
        </Text>
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
    padding: 20,
    paddingBottom: 35,
  },
  intro: {
    marginBottom: 20,
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
    fontSize: 25,
    fontWeight: 'bold',
    color: '#17365D',
  },
  subtitle: {
    fontSize: 14,
    color: '#667085',
    marginTop: 7,
  },
  summary: {
    flexDirection: 'row',
    gap: 9,
    marginBottom: 25,
  },
  summaryCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: '#EAECF0',
  },
  summaryNumber: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#17365D',
    marginTop: 9,
  },
  summaryLabel: {
    fontSize: 11,
    color: '#667085',
    marginTop: 3,
  },
  listHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 13,
  },
  listTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#17365D',
  },
  listSubtitle: {
    fontSize: 12,
    color: '#667085',
  },
  productCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 13,
    padding: 15,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#EAECF0',
  },
  productTop: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  productIcon: {
    width: 43,
    height: 43,
    backgroundColor: '#EAF3FC',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  productInfo: {
    flex: 1,
  },
  productName: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#344054',
  },
  productDescription: {
    fontSize: 12,
    color: '#667085',
    marginTop: 4,
  },
  productBottom: {
    borderTopWidth: 1,
    borderTopColor: '#EAECF0',
    marginTop: 15,
    paddingTop: 13,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 8,
  },
  quantityLabel: {
    fontSize: 11,
    color: '#667085',
  },
  quantity: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#17365D',
    marginTop: 4,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
    marginTop: 12,
  },
  footerText: {
    flex: 1,
    color: '#667085',
    fontSize: 11,
  },
});
