import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_33_1483}>
        <View style={styles.View_I33_1483_17_223}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a14/c78e/a1b75fc290001c17e3efc91c41de66d5"
            }}
            style={styles.ImageBackground_I33_1483_17_223_11_116}
          />
        </View>
        <View style={styles.View_I33_1483_17_224}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed5a/088d/33e8ca1726e674fe34c3aaf9bfc72ebb"
            }}
            style={styles.ImageBackground_I33_1483_17_224_11_127}
          />
          <View style={styles.View_I33_1483_17_224_11_128}>
            <View
              source={{ uri: "null" }}
              style={styles.View_I33_1483_17_224_11_129}
            />
            <View style={styles.View_I33_1483_17_224_11_130}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f4fb/ca8a/83545d9467479da1f143d296c158ca39"
                }}
                style={styles.ImageBackground_I33_1483_17_224_11_131}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7784/bba3/f569ed909f9f283580516e2682ac80cf"
                }}
                style={styles.ImageBackground_I33_1483_17_224_11_132}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a828/db86/6fc831f1fa4353fa15152239b7b2c006"
                }}
                style={styles.ImageBackground_I33_1483_17_224_11_135}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d4c/96ea/99e18e552cd5f916f6b3b51b1cba4d9a"
                }}
                style={styles.ImageBackground_I33_1483_17_224_11_138}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ba1/08a9/d1fb457e72979eaf3e31769935dddc1c"
                }}
                style={styles.ImageBackground_I33_1483_17_224_11_141}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e9f8/4ba8/589b3326358ffb1243c928cdadb1f605"
              }}
              style={styles.ImageBackground_I33_1483_17_224_11_142}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/39e2/c080/a0ab0a86a7dafd5eac31d1f8a815a699"
              }}
              style={styles.ImageBackground_I33_1483_17_224_11_148}
            />
            <View style={styles.View_I33_1483_17_224_11_155}>
              <View style={styles.View_I33_1483_17_224_11_156}>
                <Text style={styles.Text_I33_1483_17_224_11_156}>12:30</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_36_2179}>
        <View style={styles.View_I36_2179_17_1228}>
          <View style={styles.View_I36_2179_17_1228_17_1192} />
          <View style={styles.View_I36_2179_17_1228_17_1193}>
            <View style={styles.View_I36_2179_17_1228_17_1194}>
              <View style={styles.View_I36_2179_17_1228_17_1195} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bcb0/7ac2/2ddc4bd15d404d46ba0366dd8eb1b0ac"
                }}
                style={styles.ImageBackground_I36_2179_17_1228_17_1196}
              />
            </View>
            <View style={styles.View_I36_2179_17_1228_17_1197}>
              <View style={styles.View_I36_2179_17_1228_17_1198} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d11e/1c66/718270e29b669bcc9cd67bb7efb8de63"
                }}
                style={styles.ImageBackground_I36_2179_17_1228_17_1199}
              />
            </View>
            <View style={styles.View_I36_2179_17_1228_17_1200}>
              <View style={styles.View_I36_2179_17_1228_17_1201} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/09bd/05ab/9dc8b81f0aa912820047887dfb21299a"
                }}
                style={styles.ImageBackground_I36_2179_17_1228_17_1202}
              />
            </View>
          </View>
          <View style={styles.View_I36_2179_17_1228_17_1203}>
            <View style={styles.View_I36_2179_17_1228_17_1204}>
              <Text style={styles.Text_I36_2179_17_1228_17_1204}>
                My Profile
              </Text>
            </View>
          </View>
          <View style={styles.View_I36_2179_17_1228_17_1206}>
            <View style={styles.View_I36_2179_17_1228_17_1207} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ff9/72c9/70ee6a6b72a60e6aa1c96214371fe519"
              }}
              style={styles.ImageBackground_I36_2179_17_1228_17_1209}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_38_1669}>
        <View style={styles.View_I38_1669_38_1523} />
        <View style={styles.View_I38_1669_42_3105}>
          <Text style={styles.Text_I38_1669_42_3105}>Social Media</Text>
        </View>
        <View style={styles.View_I38_1669_38_1524}>
          <View style={styles.View_I38_1669_38_1524_38_1514}>
            <Text style={styles.Text_I38_1669_38_1524_38_1514}>London, UK</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ac58/62c5/4753ddacb63ae8032fd87249ac634321"
            }}
            style={styles.ImageBackground_I38_1669_38_1524_38_1515}
          />
        </View>
        <View style={styles.View_I38_1669_38_1525}>
          <View style={styles.View_I38_1669_38_1525_38_1460} />
          <View style={styles.View_I38_1669_38_1525_38_1461} />
          <View style={styles.View_I38_1669_38_1525_38_1462}>
            <Text style={styles.Text_I38_1669_38_1525_38_1462}>
              300 / 1000 XP
            </Text>
          </View>
        </View>
        <View style={styles.View_I38_1669_38_1526}>
          <Text style={styles.Text_I38_1669_38_1526}>LVL 25</Text>
        </View>
        <View style={styles.View_I38_1669_38_1527}>
          <Text style={styles.Text_I38_1669_38_1527}>@RoleAdict92</Text>
        </View>
        <View style={styles.View_I38_1669_38_1528}>
          <Text style={styles.Text_I38_1669_38_1528}>Esther Howard</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd44/e89a/738090c82e26719fa2b86227f94b7b46"
          }}
          style={styles.ImageBackground_I38_1669_38_1529}
        />
        <View style={styles.View_I38_1669_38_1530}>
          <View style={styles.View_I38_1669_38_1530_105_6438}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9635/e9da/c305de497d64caa2fa7ba098d84829a8"
              }}
              style={styles.ImageBackground_I38_1669_38_1530_105_6438_76_6133}
            />
          </View>
          <View style={styles.View_I38_1669_38_1530_37_2299}>
            <Text style={styles.Text_I38_1669_38_1530_37_2299}>Wizard</Text>
          </View>
        </View>
        <View style={styles.View_I38_1669_38_1531}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e481/01c0/47f223c886fd990fc11b95f81f988a20"
            }}
            style={styles.ImageBackground_I38_1669_38_1531_37_2302}
          />
          <View style={styles.View_I38_1669_38_1531_37_2304}>
            <Text style={styles.Text_I38_1669_38_1531_37_2304}>
              Female Human
            </Text>
          </View>
        </View>
        <View style={styles.View_I38_1669_38_1532}>
          <Text style={styles.Text_I38_1669_38_1532}>Bio</Text>
        </View>
        <View style={styles.View_I38_1669_38_1533}>
          <View style={styles.View_I38_1669_38_1533_38_1504}>
            <Text style={styles.Text_I38_1669_38_1533_38_1504}>
              Hello, my name is Esther. I am from London, and I discovered role
              games 2 years ago. I have a cat named Kiara. I would like to join
              a campaign (physical preferred) with a good plot, where I can
              develop my character personality and backstory!
            </Text>
          </View>
        </View>
        <View style={styles.View_I38_1669_38_1534}>
          <Text style={styles.Text_I38_1669_38_1534}>Favourite Games</Text>
        </View>
        <View style={styles.View_I38_1669_38_1535}>
          <View style={styles.View_I38_1669_38_1535_38_1423}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/68cd/e4c9/d8c016d81f1d8b3c3866af5b1df47efc"
              }}
              style={styles.ImageBackground_I38_1669_38_1535_38_1423_38_1399}
            />
            <View style={styles.View_I38_1669_38_1535_38_1423_38_1400}>
              <Text style={styles.Text_I38_1669_38_1535_38_1423_38_1400}>
                DnD 5e
              </Text>
            </View>
          </View>
          <View style={styles.View_I38_1669_38_1535_38_1424}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c5de/25d7/31d0ab5718e7387c9fdef4851349fc24"
              }}
              style={styles.ImageBackground_I38_1669_38_1535_38_1424_38_1399}
            />
            <View style={styles.View_I38_1669_38_1535_38_1424_38_1400}>
              <Text style={styles.Text_I38_1669_38_1535_38_1424_38_1400}>
                Starfinder
              </Text>
            </View>
          </View>
          <View style={styles.View_I38_1669_38_1535_38_1425}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cfd4/3eb6/e294c5951ff160c269e1b8442ae1de3a"
              }}
              style={styles.ImageBackground_I38_1669_38_1535_38_1425_38_1399}
            />
            <View style={styles.View_I38_1669_38_1535_38_1425_38_1400}>
              <Text style={styles.Text_I38_1669_38_1535_38_1425_38_1400}>
                Z-Corps
              </Text>
            </View>
          </View>
          <View style={styles.View_I38_1669_38_1535_38_1426}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1105/d777/ec3b82a65bae33d80da56da130fbe60e"
              }}
              style={styles.ImageBackground_I38_1669_38_1535_38_1426_38_1399}
            />
            <View style={styles.View_I38_1669_38_1535_38_1426_38_1400}>
              <Text style={styles.Text_I38_1669_38_1535_38_1426_38_1400}>
                Vampire: The Mascarade
              </Text>
            </View>
          </View>
          <View style={styles.View_I38_1669_38_1535_38_1427}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c5aa/c556/87fbf876114463ec285cc016973cc4ea"
              }}
              style={styles.ImageBackground_I38_1669_38_1535_38_1427_38_1399}
            />
            <View style={styles.View_I38_1669_38_1535_38_1427_38_1400}>
              <Text style={styles.Text_I38_1669_38_1535_38_1427_38_1400}>
                Maho Shojo
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_I38_1669_38_1536}>
          <View style={styles.View_I38_1669_38_1536_38_1329}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/41ff/6e2b/5f71479ad1b86198818aeba52524ff48"
              }}
              style={styles.ImageBackground_I38_1669_38_1536_38_1329_37_2228}
            />
            <View style={styles.View_I38_1669_38_1536_38_1329_37_2229}>
              <Text style={styles.Text_I38_1669_38_1536_38_1329_37_2229}>
                Charisma
              </Text>
            </View>
            <View style={styles.View_I38_1669_38_1536_38_1329_37_2230}>
              <Text style={styles.Text_I38_1669_38_1536_38_1329_37_2230}>
                18
              </Text>
            </View>
            <View style={styles.View_I38_1669_38_1536_38_1329_37_2231}>
              <Text style={styles.Text_I38_1669_38_1536_38_1329_37_2231}>
                +4
              </Text>
            </View>
          </View>
          <View style={styles.View_I38_1669_38_1536_38_1330}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/41ff/6e2b/5f71479ad1b86198818aeba52524ff48"
              }}
              style={styles.ImageBackground_I38_1669_38_1536_38_1330_37_2228}
            />
            <View style={styles.View_I38_1669_38_1536_38_1330_37_2229}>
              <Text style={styles.Text_I38_1669_38_1536_38_1330_37_2229}>
                Wisdom
              </Text>
            </View>
            <View style={styles.View_I38_1669_38_1536_38_1330_37_2230}>
              <Text style={styles.Text_I38_1669_38_1536_38_1330_37_2230}>
                9
              </Text>
            </View>
            <View style={styles.View_I38_1669_38_1536_38_1330_37_2231}>
              <Text style={styles.Text_I38_1669_38_1536_38_1330_37_2231}>
                -1
              </Text>
            </View>
          </View>
          <View style={styles.View_I38_1669_38_1536_38_1331}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/41ff/6e2b/5f71479ad1b86198818aeba52524ff48"
              }}
              style={styles.ImageBackground_I38_1669_38_1536_38_1331_37_2228}
            />
            <View style={styles.View_I38_1669_38_1536_38_1331_37_2229}>
              <Text style={styles.Text_I38_1669_38_1536_38_1331_37_2229}>
                Intelligence
              </Text>
            </View>
            <View style={styles.View_I38_1669_38_1536_38_1331_37_2230}>
              <Text style={styles.Text_I38_1669_38_1536_38_1331_37_2230}>
                14
              </Text>
            </View>
            <View style={styles.View_I38_1669_38_1536_38_1331_37_2231}>
              <Text style={styles.Text_I38_1669_38_1536_38_1331_37_2231}>
                +2
              </Text>
            </View>
          </View>
          <View style={styles.View_I38_1669_38_1536_38_1332}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/41ff/6e2b/5f71479ad1b86198818aeba52524ff48"
              }}
              style={styles.ImageBackground_I38_1669_38_1536_38_1332_37_2228}
            />
            <View style={styles.View_I38_1669_38_1536_38_1332_37_2229}>
              <Text style={styles.Text_I38_1669_38_1536_38_1332_37_2229}>
                Constitution
              </Text>
            </View>
            <View style={styles.View_I38_1669_38_1536_38_1332_37_2230}>
              <Text style={styles.Text_I38_1669_38_1536_38_1332_37_2230}>
                13
              </Text>
            </View>
            <View style={styles.View_I38_1669_38_1536_38_1332_37_2231}>
              <Text style={styles.Text_I38_1669_38_1536_38_1332_37_2231}>
                +1
              </Text>
            </View>
          </View>
          <View style={styles.View_I38_1669_38_1536_38_1333}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/41ff/6e2b/5f71479ad1b86198818aeba52524ff48"
              }}
              style={styles.ImageBackground_I38_1669_38_1536_38_1333_37_2228}
            />
            <View style={styles.View_I38_1669_38_1536_38_1333_37_2229}>
              <Text style={styles.Text_I38_1669_38_1536_38_1333_37_2229}>
                Dextrexity
              </Text>
            </View>
            <View style={styles.View_I38_1669_38_1536_38_1333_37_2230}>
              <Text style={styles.Text_I38_1669_38_1536_38_1333_37_2230}>
                15
              </Text>
            </View>
            <View style={styles.View_I38_1669_38_1536_38_1333_37_2231}>
              <Text style={styles.Text_I38_1669_38_1536_38_1333_37_2231}>
                +2
              </Text>
            </View>
          </View>
          <View style={styles.View_I38_1669_38_1536_38_1334}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/41ff/6e2b/5f71479ad1b86198818aeba52524ff48"
              }}
              style={styles.ImageBackground_I38_1669_38_1536_38_1334_37_2228}
            />
            <View style={styles.View_I38_1669_38_1536_38_1334_37_2229}>
              <Text style={styles.Text_I38_1669_38_1536_38_1334_37_2229}>
                Strength
              </Text>
            </View>
            <View style={styles.View_I38_1669_38_1536_38_1334_37_2230}>
              <Text style={styles.Text_I38_1669_38_1536_38_1334_37_2230}>
                11
              </Text>
            </View>
            <View style={styles.View_I38_1669_38_1536_38_1334_37_2231}>
              <Text style={styles.Text_I38_1669_38_1536_38_1334_37_2231}>
                +0
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_I38_1669_42_4306}>
          <View style={styles.View_I38_1669_42_3179}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3a74/4617/c1a5e60858f1106b922535f0f91e727d"
              }}
              style={styles.ImageBackground_I38_1669_42_3180}
            />
          </View>
          <View style={styles.View_I38_1669_42_3407}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/696e/b498/5492563a1ed7646c173b4fb513d56e6d"
              }}
              style={styles.ImageBackground_I38_1669_42_3408}
            />
          </View>
          <View style={styles.View_I38_1669_42_3644}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4baf/1754/17dc69c2fd5b1ee19566a194954b2979"
              }}
              style={styles.ImageBackground_I38_1669_42_3645}
            />
          </View>
          <View style={styles.View_I38_1669_42_4051}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c462/ac64/3e0e7b7199bea4dd2817d88f9a06ca6a"
              }}
              style={styles.ImageBackground_I38_1669_42_4052}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("111%") },
  View_33_1483: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("111%"),
    minHeight: hp("111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I33_1483_17_223: {
    flexGrow: 1,
    width: wp("102%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-2%"),
    top: hp("104%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I33_1483_17_223_11_116: {
    flexGrow: 1,
    width: wp("102%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I33_1483_17_224: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I33_1483_17_224_11_127: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I33_1483_17_224_11_128: {
    flexGrow: 1,
    width: wp("31%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%"),
    top: hp("0%")
  },
  View_I33_1483_17_224_11_129: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I33_1483_17_224_11_130: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_I33_1483_17_224_11_131: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I33_1483_17_224_11_132: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I33_1483_17_224_11_135: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I33_1483_17_224_11_138: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  ImageBackground_I33_1483_17_224_11_141: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  ImageBackground_I33_1483_17_224_11_142: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("1%")
  },
  ImageBackground_I33_1483_17_224_11_148: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("1%")
  },
  View_I33_1483_17_224_11_155: {
    width: wp("9%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  View_I33_1483_17_224_11_156: {
    width: wp("9%"),
    minWidth: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I33_1483_17_224_11_156: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_36_2179: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I36_2179_17_1228: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I36_2179_17_1228_17_1192: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I36_2179_17_1228_17_1193: {
    flexGrow: 1,
    width: wp("36%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I36_2179_17_1228_17_1194: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I36_2179_17_1228_17_1195: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I36_2179_17_1228_17_1196: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_I36_2179_17_1228_17_1197: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("0%")
  },
  View_I36_2179_17_1228_17_1198: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I36_2179_17_1228_17_1199: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_I36_2179_17_1228_17_1200: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("0%")
  },
  View_I36_2179_17_1228_17_1201: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I36_2179_17_1228_17_1202: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_I36_2179_17_1228_17_1203: {
    flexGrow: 1,
    width: wp("25%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I36_2179_17_1228_17_1204: {
    flexGrow: 1,
    width: wp("25%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I36_2179_17_1228_17_1204: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.030000001192092896,
    textTransform: "none"
  },
  View_I36_2179_17_1228_17_1206: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%")
  },
  View_I36_2179_17_1228_17_1207: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I36_2179_17_1228_17_1209: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_38_1669: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("91%"),
    minHeight: hp("91%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("13%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I38_1669_38_1523: {
    flexGrow: 1,
    width: wp("92%"),
    height: hp("165%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I38_1669_42_3105: {
    flexGrow: 1,
    width: wp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("154%"),
    justifyContent: "flex-start"
  },
  Text_I38_1669_42_3105: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.03600000143051148,
    textTransform: "none"
  },
  View_I38_1669_38_1524: {
    flexGrow: 1,
    width: wp("31%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("32%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I38_1669_38_1524_38_1514: {
    flexGrow: 1,
    width: wp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I38_1669_38_1524_38_1514: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0.027000001072883608,
    textTransform: "none"
  },
  ImageBackground_I38_1669_38_1524_38_1515: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I38_1669_38_1525: {
    flexGrow: 1,
    width: wp("50%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("25%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I38_1669_38_1525_38_1460: {
    flexGrow: 1,
    width: wp("50%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_I38_1669_38_1525_38_1461: {
    flexGrow: 1,
    width: wp("20%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_I38_1669_38_1525_38_1462: {
    flexGrow: 1,
    width: wp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_I38_1669_38_1525_38_1462: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I38_1669_38_1526: {
    flexGrow: 1,
    width: wp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("24%"),
    justifyContent: "flex-start"
  },
  Text_I38_1669_38_1526: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.03600000143051148,
    textTransform: "none"
  },
  View_I38_1669_38_1527: {
    flexGrow: 1,
    width: wp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("20%"),
    justifyContent: "flex-start"
  },
  Text_I38_1669_38_1527: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I38_1669_38_1528: {
    flexGrow: 1,
    width: wp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("16%"),
    justifyContent: "flex-start"
  },
  Text_I38_1669_38_1528: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I38_1669_38_1529: {
    flexGrow: 1,
    width: wp("28%"),
    height: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("0%")
  },
  View_I38_1669_38_1530: {
    flexGrow: 1,
    width: wp("13%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72%"),
    top: hp("8%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I38_1669_38_1530_105_6438: {
    flexGrow: 1,
    width: wp("13%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I38_1669_38_1530_105_6438_76_6133: {
    flexGrow: 1,
    width: wp("13%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_I38_1669_38_1530_37_2299: {
    flexGrow: 1,
    width: wp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_I38_1669_38_1530_37_2299: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I38_1669_38_1531: {
    flexGrow: 1,
    width: wp("13%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("8%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I38_1669_38_1531_37_2302: {
    flexGrow: 1,
    width: wp("13%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I38_1669_38_1531_37_2304: {
    flexGrow: 1,
    width: wp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_I38_1669_38_1531_37_2304: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I38_1669_38_1532: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("74%"),
    justifyContent: "flex-start"
  },
  Text_I38_1669_38_1532: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.03600000143051148,
    textTransform: "none"
  },
  View_I38_1669_38_1533: {
    flexGrow: 1,
    width: wp("83%"),
    height: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("79%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I38_1669_38_1533_38_1504: {
    flexGrow: 1,
    width: wp("75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I38_1669_38_1533_38_1504: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.027000001072883608,
    textTransform: "none"
  },
  View_I38_1669_38_1534: {
    flexGrow: 1,
    width: wp("49%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("114%"),
    justifyContent: "flex-start"
  },
  Text_I38_1669_38_1534: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.03600000143051148,
    textTransform: "none"
  },
  View_I38_1669_38_1535: {
    flexGrow: 1,
    width: wp("83%"),
    height: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("120%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I38_1669_38_1535_38_1423: {
    flexGrow: 1,
    width: wp("26%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I38_1669_38_1535_38_1423_38_1399: {
    flexGrow: 1,
    width: wp("26%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I38_1669_38_1535_38_1423_38_1400: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I38_1669_38_1535_38_1423_38_1400: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.027000001072883608,
    textTransform: "none"
  },
  View_I38_1669_38_1535_38_1424: {
    flexGrow: 1,
    width: wp("28%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I38_1669_38_1535_38_1424_38_1399: {
    flexGrow: 1,
    width: wp("28%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I38_1669_38_1535_38_1424_38_1400: {
    flexGrow: 1,
    width: wp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I38_1669_38_1535_38_1424_38_1400: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.027000001072883608,
    textTransform: "none"
  },
  View_I38_1669_38_1535_38_1425: {
    flexGrow: 1,
    width: wp("26%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("8%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I38_1669_38_1535_38_1425_38_1399: {
    flexGrow: 1,
    width: wp("26%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I38_1669_38_1535_38_1425_38_1400: {
    flexGrow: 1,
    width: wp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I38_1669_38_1535_38_1425_38_1400: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.027000001072883608,
    textTransform: "none"
  },
  View_I38_1669_38_1535_38_1426: {
    flexGrow: 1,
    width: wp("62%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("14%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I38_1669_38_1535_38_1426_38_1399: {
    flexGrow: 1,
    width: wp("62%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I38_1669_38_1535_38_1426_38_1400: {
    flexGrow: 1,
    width: wp("54%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I38_1669_38_1535_38_1426_38_1400: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.027000001072883608,
    textTransform: "none"
  },
  View_I38_1669_38_1535_38_1427: {
    flexGrow: 1,
    width: wp("31%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("8%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I38_1669_38_1535_38_1427_38_1399: {
    flexGrow: 1,
    width: wp("31%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I38_1669_38_1535_38_1427_38_1400: {
    flexGrow: 1,
    width: wp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I38_1669_38_1535_38_1427_38_1400: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.027000001072883608,
    textTransform: "none"
  },
  View_I38_1669_38_1536: {
    flexGrow: 1,
    width: wp("82%"),
    height: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("38%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I38_1669_38_1536_38_1329: {
    flexGrow: 1,
    width: wp("27%"),
    height: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%"),
    top: hp("16%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I38_1669_38_1536_38_1329_37_2228: {
    flexGrow: 1,
    width: wp("27%"),
    height: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_I38_1669_38_1536_38_1329_37_2229: {
    flexGrow: 1,
    width: wp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I38_1669_38_1536_38_1329_37_2229: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.019500000774860384,
    textTransform: "none"
  },
  View_I38_1669_38_1536_38_1329_37_2230: {
    flexGrow: 1,
    width: wp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I38_1669_38_1536_38_1329_37_2230: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 29,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.054000002145767216,
    textTransform: "none"
  },
  View_I38_1669_38_1536_38_1329_37_2231: {
    flexGrow: 1,
    width: wp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_I38_1669_38_1536_38_1329_37_2231: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.03600000143051148,
    textTransform: "none"
  },
  View_I38_1669_38_1536_38_1330: {
    flexGrow: 1,
    width: wp("27%"),
    height: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("16%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I38_1669_38_1536_38_1330_37_2228: {
    flexGrow: 1,
    width: wp("27%"),
    height: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_I38_1669_38_1536_38_1330_37_2229: {
    flexGrow: 1,
    width: wp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I38_1669_38_1536_38_1330_37_2229: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.019500000774860384,
    textTransform: "none"
  },
  View_I38_1669_38_1536_38_1330_37_2230: {
    flexGrow: 1,
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I38_1669_38_1536_38_1330_37_2230: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 29,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.054000002145767216,
    textTransform: "none"
  },
  View_I38_1669_38_1536_38_1330_37_2231: {
    flexGrow: 1,
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_I38_1669_38_1536_38_1330_37_2231: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.03600000143051148,
    textTransform: "none"
  },
  View_I38_1669_38_1536_38_1331: {
    flexGrow: 1,
    width: wp("27%"),
    height: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I38_1669_38_1536_38_1331_37_2228: {
    flexGrow: 1,
    width: wp("27%"),
    height: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_I38_1669_38_1536_38_1331_37_2229: {
    flexGrow: 1,
    width: wp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I38_1669_38_1536_38_1331_37_2229: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.019500000774860384,
    textTransform: "none"
  },
  View_I38_1669_38_1536_38_1331_37_2230: {
    flexGrow: 1,
    width: wp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I38_1669_38_1536_38_1331_37_2230: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 29,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.054000002145767216,
    textTransform: "none"
  },
  View_I38_1669_38_1536_38_1331_37_2231: {
    flexGrow: 1,
    width: wp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_I38_1669_38_1536_38_1331_37_2231: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.03600000143051148,
    textTransform: "none"
  },
  View_I38_1669_38_1536_38_1332: {
    flexGrow: 1,
    width: wp("27%"),
    height: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I38_1669_38_1536_38_1332_37_2228: {
    flexGrow: 1,
    width: wp("27%"),
    height: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_I38_1669_38_1536_38_1332_37_2229: {
    flexGrow: 1,
    width: wp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I38_1669_38_1536_38_1332_37_2229: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.019500000774860384,
    textTransform: "none"
  },
  View_I38_1669_38_1536_38_1332_37_2230: {
    flexGrow: 1,
    width: wp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I38_1669_38_1536_38_1332_37_2230: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 29,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.054000002145767216,
    textTransform: "none"
  },
  View_I38_1669_38_1536_38_1332_37_2231: {
    flexGrow: 1,
    width: wp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_I38_1669_38_1536_38_1332_37_2231: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.03600000143051148,
    textTransform: "none"
  },
  View_I38_1669_38_1536_38_1333: {
    flexGrow: 1,
    width: wp("27%"),
    height: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I38_1669_38_1536_38_1333_37_2228: {
    flexGrow: 1,
    width: wp("27%"),
    height: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_I38_1669_38_1536_38_1333_37_2229: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I38_1669_38_1536_38_1333_37_2229: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.019500000774860384,
    textTransform: "none"
  },
  View_I38_1669_38_1536_38_1333_37_2230: {
    flexGrow: 1,
    width: wp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I38_1669_38_1536_38_1333_37_2230: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 29,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.054000002145767216,
    textTransform: "none"
  },
  View_I38_1669_38_1536_38_1333_37_2231: {
    flexGrow: 1,
    width: wp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_I38_1669_38_1536_38_1333_37_2231: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.03600000143051148,
    textTransform: "none"
  },
  View_I38_1669_38_1536_38_1334: {
    flexGrow: 1,
    width: wp("27%"),
    height: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I38_1669_38_1536_38_1334_37_2228: {
    flexGrow: 1,
    width: wp("27%"),
    height: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_I38_1669_38_1536_38_1334_37_2229: {
    flexGrow: 1,
    width: wp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I38_1669_38_1536_38_1334_37_2229: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.019500000774860384,
    textTransform: "none"
  },
  View_I38_1669_38_1536_38_1334_37_2230: {
    flexGrow: 1,
    width: wp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I38_1669_38_1536_38_1334_37_2230: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 29,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.054000002145767216,
    textTransform: "none"
  },
  View_I38_1669_38_1536_38_1334_37_2231: {
    flexGrow: 1,
    width: wp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_I38_1669_38_1536_38_1334_37_2231: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.03600000143051148,
    textTransform: "none"
  },
  View_I38_1669_42_4306: {
    flexGrow: 1,
    width: wp("81%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("160%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I38_1669_42_3179: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I38_1669_42_3180: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I38_1669_42_3407: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I38_1669_42_3408: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I38_1669_42_3644: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I38_1669_42_3645: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I38_1669_42_4051: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I38_1669_42_4052: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
