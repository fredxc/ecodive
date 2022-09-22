import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

import {
  Box,
  Text,
  IconButton,
  View,
  Avatar,
  FlatList,
  Progress,
  Icon,
  Button,
  Stack,
  Checkbox,
  Slider,
  FormControl,
  Input,
  Radio,
} from 'native-base';
import { SetStateAction, useState } from 'react';

import { SafeAreaView } from 'react-native-safe-area-context';

export default function DonationScheduling() {
  const navigation = useNavigation();
  const [multiSliderValue, setMultiSliderValue] = useState([9, 12]);
  const [nonCollidingMultiSliderValue, setNonCollidingMultiSliderValue] =
    useState([0, 100]);

  const multiSliderValuesChange = (values: SetStateAction<number[]>) =>
    setMultiSliderValue(values);
  const nonCollidingMultiSliderValuesChange = (
    values: SetStateAction<number[]>
  ) => setNonCollidingMultiSliderValue(values);

  return (
    <View>
      <Box pb={4} height="120" bgColor="emerald.100" px={8}>
        <IconButton
          size="lg"
          rounded={32}
          alignSelf="flex-start"
          left={6}
          bottom={-16}
          position="absolute"
          onPress={() => navigation.goBack()}
          bgColor="white"
          shadow={2}
          _icon={{
            paddingLeft: 1,
            name: 'chevron-left',
            as: FontAwesome5,
            color: 'emerald.500',
          }}
        />
        <Progress
          bg="white"
          _filledTrack={{
            bg: 'emerald.500',
          }}
          value={80}
          ml="45"
          mt="85"
        />
        <Text color="emerald.600" alignSelf="flex-end">
          Passo 4 <Text color="muted.400">de 5</Text>
        </Text>
      </Box>
      <Text color="muted.400" mt={6} fontSize="lg" alignSelf="center" mx={8}>
        Selecione dia e horário para a coleta
      </Text>
      <Box mx={8}>
        <MultiSlider
          values={[multiSliderValue[0], multiSliderValue[1]]}
          sliderLength={250}
          onValuesChange={multiSliderValuesChange}
          min={6}
          max={22}
          step={4}
          allowOverlap={false}
          snapped
          minMarkerOverlapDistance={40}
          containerStyle={{
            alignSelf: 'center',
          }}
        />
        <Text color="muted.400" textAlign="center" fontSize="md" mt={-2}>
          {multiSliderValue[0]}h até {multiSliderValue[1]}h
        </Text>
        <Stack
          direction={{
            base: 'column',
            md: 'row',
          }}
          space={3}
          alignItems="flex-start"
          mt={4}
        >
          <Checkbox
            value="paper"
            colorScheme="emerald"
            size="lg"
            icon={<Icon as={<FontAwesome5 name="calendar-check" />} />}
          >
            SEGUNDA
          </Checkbox>
          <Checkbox
            value="aluminum"
            colorScheme="emerald"
            size="lg"
            icon={<Icon as={<FontAwesome5 name="calendar-check" />} />}
          >
            TERÇA
          </Checkbox>
          <Checkbox
            colorScheme="emerald"
            value="Plastic"
            size="lg"
            icon={<Icon as={<FontAwesome5 name="calendar-check" />} />}
          >
            QUARTA
          </Checkbox>
          <Checkbox
            value="Glass"
            colorScheme="emerald"
            size="lg"
            icon={<Icon as={<FontAwesome5 name="calendar-check" />} />}
          >
            QUINTA
          </Checkbox>
          <Checkbox
            value="Oil"
            colorScheme="emerald"
            size="lg"
            icon={<Icon as={<FontAwesome5 name="calendar-check" />} />}
          >
            SEXTA
          </Checkbox>
          <Checkbox
            value="Metal"
            colorScheme="emerald"
            size="lg"
            icon={<Icon as={<FontAwesome5 name="calendar-check" />} />}
          >
            SÁBADO
          </Checkbox>
          <Checkbox
            value="Eletronic"
            colorScheme="emerald"
            size="lg"
            icon={<Icon as={<FontAwesome5 name="calendar-check" />} />}
          >
            DOMINGO
          </Checkbox>
        </Stack>

        <Radio.Group
          defaultValue="0"
          size="lg"
          name="Options"
          colorScheme="green"
          justifyContent="space-around"
          mt={6}
        >
          <Stack
            direction={{
              base: 'row',
              md: 'row',
            }}
            alignItems={{
              base: 'flex-start',
              md: 'center',
            }}
            space={5}
            w="100%"
          >
            <Radio
              _text={{
                mx: 2,
                color: 'emerald.600',
              }}
              value="1"
              icon={<Icon as={<MaterialCommunityIcons name="check" />} />}
              my={1}
            >
              Coleta Única
            </Radio>

            <Radio
              _text={{
                mx: 2,
                color: 'emerald.600',
              }}
              value="2"
              icon={<Icon as={<MaterialCommunityIcons name="check" />} />}
              my={1}
            >
              Semanal
            </Radio>
          </Stack>
          <Stack
            direction={{
              base: 'row',
              md: 'row',
            }}
            alignItems={{
              base: 'flex-start',
              md: 'center',
            }}
            space={10}
            w="100%"
          >
            <Radio
              _text={{
                mx: 2,
                color: 'emerald.600',
              }}
              value="3"
              icon={<Icon as={<MaterialCommunityIcons name="check" />} />}
              my={1}
            >
              Quinzenal
            </Radio>
            <Radio
              _text={{
                mx: 2,
                color: 'emerald.600',
              }}
              value="4"
              icon={<Icon as={<MaterialCommunityIcons name="check" />} />}
              my={1}
            >
              Mensal
            </Radio>
          </Stack>
        </Radio.Group>
      </Box>

      <Box
        flexDirection="row"
        borderColor="muted.100"
        mt={6}
        justifyContent="center"
      >
        <Button
          mr={3}
          px={8}
          size="lg"
          shadow="2"
          variant="solid"
          colorScheme="muted"
          onPress={() => navigation.goBack()}
        >
          ANTERIOR
        </Button>
        <Button
          ml={3}
          px={10}
          size="lg"
          shadow="2"
          variant="solid"
          colorScheme="emerald"
          onPress={() => navigation.navigate('DonationAddMoreScheduling')}
        >
          SALVAR
        </Button>
      </Box>
    </View>
  );
}
