import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import {
  Box,
  Text,
  Icon,
  Button,
  ScrollView,
  Avatar,
  Divider,
} from 'native-base';
import { useEffect } from 'react';
import { Dimensions } from 'react-native';
import Animated, {
  useAnimatedProps,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { ReText } from 'react-native-redash';
import Svg, { Circle } from 'react-native-svg';

import { useCommon } from '../../contexts';

const { width, height } = Dimensions.get('screen');

const CIRCLE_LENGHT = 250;
const R = CIRCLE_LENGHT / (2 * Math.PI);
const AnimatedCircle = Animated.createAnimatedComponent(Circle);

export default function History() {
  const progress = useSharedValue(0);

  useEffect(() => {
    progress.value = withTiming(0.25, { duration: 2000 });
  }, []);

  const AnimatedProps = useAnimatedProps(() => ({
    strokeDashoffset: CIRCLE_LENGHT * (1 - progress.value),
  }));

  const ProgressText = useDerivedValue(() => {
    return `${Math.floor(progress.value * 100) + '%'} `;
  });

  return (
    <ScrollView>
      <Box pt={16} height="156" alignItems="center" bgColor="emerald.50">
        <Text fontSize="lg" color="emerald.600">
          COLETAS
        </Text>
      </Box>
      <Box p={6} mx={6} mt={-12} shadow="2" rounded={8} bgColor="white">
        <Text color="muted.600" fontSize="md">
          <Text fontSize="lg" color="muted.300">
            ●{' '}
          </Text>
          Nenhum pedido para acompanhar!
        </Text>
        <Button
          mt={4}
          size="lg"
          shadow="2"
          variant="solid"
          colorScheme="emerald"
          leftIcon={<Icon size="sm" name="recycle" as={FontAwesome5} />}
        >
          CRIAR COLETA
        </Button>
      </Box>
      <Box my={8} px={6}>
        <Text bold fontSize="lg" color="muted.600">
          Resumo Trimestral
        </Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>

        <Box flexDirection="row">
          <Box
            height="150"
            width="150"
            shadow="2"
            rounded={8}
            bgColor="emerald.50"
          >
            <ReText
              style={{
                paddingTop: '30%',
                position: 'absolute',
                fontSize: 20,
                color: 'green',
                alignSelf: 'center',
              }}
              text={ProgressText}
            />
            <Svg
              style={{
                paddingTop: 40,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Circle
                cx={'50%'}
                cy={'40%'}
                r={R}
                stroke={'grey'}
                strokeWidth={6}
              />
              <AnimatedCircle
                cx={'50%'}
                cy={'40%'}
                r={R+1}
                stroke={'green'}
                strokeWidth={10}
                strokeDasharray={CIRCLE_LENGHT}
                animatedProps={AnimatedProps}
                strokeLinecap={'round'}
              />
            </Svg>
            <Text
              alignSelf="center"
              mt={'75%'}
              position="absolute"
              color="muted.600"
              fontSize="xl"
            >
              PAPEL
            </Text>
          </Box>
          <Box
            height="150"
            width="150"
            shadow="2"
            rounded={8}
            bgColor="emerald.50"
            ml={2}
          >
            <Text alignSelf="center"
              mt={"15%"}
              fontSize="6xl"
              color="emerald.600"
              >
              12
            </Text>
            <Text
               alignSelf="center"
               mt={'70%'}
               position="absolute"
               color="muted.600"
               fontSize="lg"
               lineHeight={"xs"}
            >
              {"   "}COLETAS CONCLUIDAS
            </Text>
          </Box>
        </Box>
        
        </ScrollView>
      </Box>

      <Box my={8} px={6}>
        <Text bold fontSize="lg" color="muted.600">
          Histórico
        </Text>

        <Box mt={3}>
          <Text color="muted.400">Março</Text>
          <Box p={3} mt={1} shadow="2" rounded={8} bgColor="white">
            <Box
              flexDirection="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Box flexDirection="row">
                <Avatar
                  size="sm"
                  bg="muted.200"
                  source={{
                    uri: 'https://images.unsplash.com/photo-1510771463146-e89e6e86560e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80',
                  }}
                >
                  R+
                </Avatar>
                <Text color="muted.600" fontSize="md" pl={3}>
                  Vitor Laperriere
                </Text>
              </Box>
              <Button
                variant="ghost"
                colorScheme="muted"
                leftIcon={
                  <Icon size="sm" name="chevron-right" as={FontAwesome5} />
                }
              ></Button>
            </Box>
            <Divider mt={2} />
            <Box flexDirection="column" mt={2}>
              <Box flexDirection="row">
                <Text fontSize="md" color="emerald.600" opacity={0.7}>
                  2<Text fontSize="xs">x</Text>
                </Text>

                <Text fontSize="sm" color="muted.600" ml={2} mt={0.5}>
                  Saco 10L de Papel
                </Text>
              </Box>

              <Box flexDirection="row">
                <Icon
                  mt={1.5}
                  size="sm"
                  name="map-marker"
                  as={FontAwesome}
                  color="emerald.600"
                  opacity={0.7}
                />
                <Text fontSize="sm" color="muted.600" ml={2} mt={0.5}>
                  Rua Salomão Dibbo, 360
                </Text>
              </Box>

              <Box flexDirection="row">
                <Icon
                  mt={1.5}
                  size="sm"
                  name="check-circle"
                  as={FontAwesome}
                  color="emerald.600"
                  opacity={0.7}
                />
                <Text fontSize="sm" color="muted.600" ml={2} mt={0.5}>
                  Coleta Concluida
                </Text>
              </Box>
            </Box>
            <Divider mt={4} />
            <Box flexDirection="row" mt={2} justifyContent="space-between">
              <Text fontSize="sm" color="muted.600" ml={2} mt={0.5}>
                Avaliar Coleta
              </Text>
              <Box flexDirection="row">
                {[1, 2, 3, 4, 5].map((item) => (
                  <Icon
                    size="md"
                    key={item}
                    name="star"
                    as={FontAwesome}
                    color="emerald.600"
                  />
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box mb={8} />
    </ScrollView>
  );
}
