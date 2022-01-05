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
      <View style={styles.View_26_1034}>
        <View style={styles.View_I26_1034_17_223}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a14/c78e/a1b75fc290001c17e3efc91c41de66d5"
            }}
            style={styles.ImageBackground_I26_1034_17_223_11_116}
          />
        </View>
        <View style={styles.View_I26_1034_17_224}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed5a/088d/33e8ca1726e674fe34c3aaf9bfc72ebb"
            }}
            style={styles.ImageBackground_I26_1034_17_224_11_127}
          />
          <View style={styles.View_I26_1034_17_224_11_128}>
            <View
              source={{ uri: "null" }}
              style={styles.View_I26_1034_17_224_11_129}
            />
            <View style={styles.View_I26_1034_17_224_11_130}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f4fb/ca8a/83545d9467479da1f143d296c158ca39"
                }}
                style={styles.ImageBackground_I26_1034_17_224_11_131}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7784/bba3/f569ed909f9f283580516e2682ac80cf"
                }}
                style={styles.ImageBackground_I26_1034_17_224_11_132}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a828/db86/6fc831f1fa4353fa15152239b7b2c006"
                }}
                style={styles.ImageBackground_I26_1034_17_224_11_135}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d4c/96ea/99e18e552cd5f916f6b3b51b1cba4d9a"
                }}
                style={styles.ImageBackground_I26_1034_17_224_11_138}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ba1/08a9/d1fb457e72979eaf3e31769935dddc1c"
                }}
                style={styles.ImageBackground_I26_1034_17_224_11_141}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e9f8/4ba8/589b3326358ffb1243c928cdadb1f605"
              }}
              style={styles.ImageBackground_I26_1034_17_224_11_142}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/39e2/c080/a0ab0a86a7dafd5eac31d1f8a815a699"
              }}
              style={styles.ImageBackground_I26_1034_17_224_11_148}
            />
            <View style={styles.View_I26_1034_17_224_11_155}>
              <View style={styles.View_I26_1034_17_224_11_156}>
                <Text style={styles.Text_I26_1034_17_224_11_156}>12:30</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_26_1072}>
        <View style={styles.View_I26_1072_17_1228}>
          <View style={styles.View_I26_1072_17_1228_17_1192} />
          <View style={styles.View_I26_1072_17_1228_17_1193}>
            <View style={styles.View_I26_1072_17_1228_17_1194}>
              <View style={styles.View_I26_1072_17_1228_17_1195} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bcb0/7ac2/2ddc4bd15d404d46ba0366dd8eb1b0ac"
                }}
                style={styles.ImageBackground_I26_1072_17_1228_17_1196}
              />
            </View>
            <View style={styles.View_I26_1072_17_1228_17_1197}>
              <View style={styles.View_I26_1072_17_1228_17_1198} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d11e/1c66/718270e29b669bcc9cd67bb7efb8de63"
                }}
                style={styles.ImageBackground_I26_1072_17_1228_17_1199}
              />
            </View>
            <View style={styles.View_I26_1072_17_1228_17_1200}>
              <View style={styles.View_I26_1072_17_1228_17_1201} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/09bd/05ab/9dc8b81f0aa912820047887dfb21299a"
                }}
                style={styles.ImageBackground_I26_1072_17_1228_17_1202}
              />
            </View>
          </View>
          <View style={styles.View_I26_1072_17_1228_17_1203}>
            <View style={styles.View_I26_1072_17_1228_17_1204}>
              <Text style={styles.Text_I26_1072_17_1228_17_1204}>
                Search Players{" "}
              </Text>
            </View>
          </View>
          <View style={styles.View_I26_1072_17_1228_17_1206}>
            <View style={styles.View_I26_1072_17_1228_17_1207} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ff9/72c9/70ee6a6b72a60e6aa1c96214371fe519"
              }}
              style={styles.ImageBackground_I26_1072_17_1228_17_1209}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_31_1358}>
        <View style={styles.View_I31_1358_31_1267}>
          <View style={styles.View_I31_1358_31_1267_31_1145} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a2f/cd50/89217a6c358f01d8e456e36323e3e669"
            }}
            style={styles.ImageBackground_I31_1358_31_1267_31_1146}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/13ba/c47a/a24c2b4098dd31c13ca05ca92b38ca8f"
            }}
            style={styles.ImageBackground_I31_1358_31_1267_31_1147}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7636/da92/f0eecec934c447c0d055efb16a3206c0"
            }}
            style={styles.ImageBackground_I31_1358_31_1267_31_1148}
          />
          <View style={styles.View_I31_1358_31_1267_31_1150}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/315c/2fee/5c8356a3b41e827a8893b3b015273645"
              }}
              style={styles.ImageBackground_I31_1358_31_1267_31_1151}
            />
          </View>
          <View style={styles.View_I31_1358_31_1267_31_1156}>
            <Text style={styles.Text_I31_1358_31_1267_31_1156}>
              @Goblinator
            </Text>
          </View>
          <View style={styles.View_I31_1358_31_1267_31_1157}>
            <Text style={styles.Text_I31_1358_31_1267_31_1157}>
              Guy Hawkins
            </Text>
          </View>
          <View style={styles.View_I31_1358_31_1267_31_1158}>
            <Text style={styles.Text_I31_1358_31_1267_31_1158}>London, UK</Text>
          </View>
        </View>
        <View style={styles.View_I31_1358_31_1268}>
          <View style={styles.View_I31_1358_31_1268_31_1145} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/48cd/2f88/4dd13d656005944912fbf66ed784063b"
            }}
            style={styles.ImageBackground_I31_1358_31_1268_31_1146}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c05f/f09f/c1526de1b33173e982fc4f450c0f6ec4"
            }}
            style={styles.ImageBackground_I31_1358_31_1268_31_1147}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7636/da92/f0eecec934c447c0d055efb16a3206c0"
            }}
            style={styles.ImageBackground_I31_1358_31_1268_31_1148}
          />
          <View style={styles.View_I31_1358_31_1268_31_1150}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/315c/2fee/5c8356a3b41e827a8893b3b015273645"
              }}
              style={styles.ImageBackground_I31_1358_31_1268_31_1151}
            />
          </View>
          <View style={styles.View_I31_1358_31_1268_31_1156}>
            <Text style={styles.Text_I31_1358_31_1268_31_1156}>
              @SkelletonKnight
            </Text>
          </View>
          <View style={styles.View_I31_1358_31_1268_31_1157}>
            <Text style={styles.Text_I31_1358_31_1268_31_1157}>
              Philippe S.
            </Text>
          </View>
          <View style={styles.View_I31_1358_31_1268_31_1158}>
            <Text style={styles.Text_I31_1358_31_1268_31_1158}>Madrid, ES</Text>
          </View>
        </View>
        <View style={styles.View_I31_1358_31_1269}>
          <View style={styles.View_I31_1358_31_1269_31_1145} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af8d/c4ba/799ecb1a91ac0fd190092efb97095fde"
            }}
            style={styles.ImageBackground_I31_1358_31_1269_31_1146}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c05f/f09f/c1526de1b33173e982fc4f450c0f6ec4"
            }}
            style={styles.ImageBackground_I31_1358_31_1269_31_1147}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7636/da92/f0eecec934c447c0d055efb16a3206c0"
            }}
            style={styles.ImageBackground_I31_1358_31_1269_31_1148}
          />
          <View style={styles.View_I31_1358_31_1269_31_1150}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/315c/2fee/5c8356a3b41e827a8893b3b015273645"
              }}
              style={styles.ImageBackground_I31_1358_31_1269_31_1151}
            />
          </View>
          <View style={styles.View_I31_1358_31_1269_31_1156}>
            <Text style={styles.Text_I31_1358_31_1269_31_1156}>
              @WonderWoman
            </Text>
          </View>
          <View style={styles.View_I31_1358_31_1269_31_1157}>
            <Text style={styles.Text_I31_1358_31_1269_31_1157}>
              Brooklyn Simmons
            </Text>
          </View>
          <View style={styles.View_I31_1358_31_1269_31_1158}>
            <Text style={styles.Text_I31_1358_31_1269_31_1158}>
              Valencia, ES
            </Text>
          </View>
        </View>
        <View style={styles.View_I31_1358_31_1270}>
          <View style={styles.View_I31_1358_31_1270_31_1145} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1daf/ec07/852dc63c46f9f40df5ce00016a8fe977"
            }}
            style={styles.ImageBackground_I31_1358_31_1270_31_1146}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c05f/f09f/c1526de1b33173e982fc4f450c0f6ec4"
            }}
            style={styles.ImageBackground_I31_1358_31_1270_31_1147}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7636/da92/f0eecec934c447c0d055efb16a3206c0"
            }}
            style={styles.ImageBackground_I31_1358_31_1270_31_1148}
          />
          <View style={styles.View_I31_1358_31_1270_31_1150}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/315c/2fee/5c8356a3b41e827a8893b3b015273645"
              }}
              style={styles.ImageBackground_I31_1358_31_1270_31_1151}
            />
          </View>
          <View style={styles.View_I31_1358_31_1270_31_1156}>
            <Text style={styles.Text_I31_1358_31_1270_31_1156}>
              @Nekomancer
            </Text>
          </View>
          <View style={styles.View_I31_1358_31_1270_31_1157}>
            <Text style={styles.Text_I31_1358_31_1270_31_1157}>
              Leslie Alexander
            </Text>
          </View>
          <View style={styles.View_I31_1358_31_1270_31_1158}>
            <Text style={styles.Text_I31_1358_31_1270_31_1158}>
              New York, US
            </Text>
          </View>
        </View>
        <View style={styles.View_I31_1358_31_1271}>
          <View style={styles.View_I31_1358_31_1271_31_1145} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4046/46f5/523349cb4ff8309073a5e7d04f109de9"
            }}
            style={styles.ImageBackground_I31_1358_31_1271_31_1146}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/13ba/c47a/a24c2b4098dd31c13ca05ca92b38ca8f"
            }}
            style={styles.ImageBackground_I31_1358_31_1271_31_1147}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7636/da92/f0eecec934c447c0d055efb16a3206c0"
            }}
            style={styles.ImageBackground_I31_1358_31_1271_31_1148}
          />
          <View style={styles.View_I31_1358_31_1271_31_1150}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/315c/2fee/5c8356a3b41e827a8893b3b015273645"
              }}
              style={styles.ImageBackground_I31_1358_31_1271_31_1151}
            />
          </View>
          <View style={styles.View_I31_1358_31_1271_31_1156}>
            <Text style={styles.Text_I31_1358_31_1271_31_1156}>
              @Robertux81
            </Text>
          </View>
          <View style={styles.View_I31_1358_31_1271_31_1157}>
            <Text style={styles.Text_I31_1358_31_1271_31_1157}>Robert Fox</Text>
          </View>
          <View style={styles.View_I31_1358_31_1271_31_1158}>
            <Text style={styles.Text_I31_1358_31_1271_31_1158}>Madrid, ES</Text>
          </View>
        </View>
        <View style={styles.View_I31_1358_31_1272}>
          <View style={styles.View_I31_1358_31_1272_31_1145} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8d72/b6d6/92b7e40744d1297d6a4cf5f355328fb7"
            }}
            style={styles.ImageBackground_I31_1358_31_1272_31_1146}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c05f/f09f/c1526de1b33173e982fc4f450c0f6ec4"
            }}
            style={styles.ImageBackground_I31_1358_31_1272_31_1147}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7636/da92/f0eecec934c447c0d055efb16a3206c0"
            }}
            style={styles.ImageBackground_I31_1358_31_1272_31_1148}
          />
          <View style={styles.View_I31_1358_31_1272_31_1150}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/315c/2fee/5c8356a3b41e827a8893b3b015273645"
              }}
              style={styles.ImageBackground_I31_1358_31_1272_31_1151}
            />
          </View>
          <View style={styles.View_I31_1358_31_1272_31_1156}>
            <Text style={styles.Text_I31_1358_31_1272_31_1156}>@Cod20</Text>
          </View>
          <View style={styles.View_I31_1358_31_1272_31_1157}>
            <Text style={styles.Text_I31_1358_31_1272_31_1157}>
              Cody Fisher
            </Text>
          </View>
          <View style={styles.View_I31_1358_31_1272_31_1158}>
            <Text style={styles.Text_I31_1358_31_1272_31_1158}>Madrid, ES</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("111%") },
  View_26_1034: {
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
  View_I26_1034_17_223: {
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
  ImageBackground_I26_1034_17_223_11_116: {
    flexGrow: 1,
    width: wp("102%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I26_1034_17_224: {
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
  ImageBackground_I26_1034_17_224_11_127: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I26_1034_17_224_11_128: {
    flexGrow: 1,
    width: wp("31%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%"),
    top: hp("0%")
  },
  View_I26_1034_17_224_11_129: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I26_1034_17_224_11_130: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_I26_1034_17_224_11_131: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I26_1034_17_224_11_132: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I26_1034_17_224_11_135: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I26_1034_17_224_11_138: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  ImageBackground_I26_1034_17_224_11_141: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  ImageBackground_I26_1034_17_224_11_142: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("1%")
  },
  ImageBackground_I26_1034_17_224_11_148: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("1%")
  },
  View_I26_1034_17_224_11_155: {
    width: wp("9%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  View_I26_1034_17_224_11_156: {
    width: wp("9%"),
    minWidth: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I26_1034_17_224_11_156: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_26_1072: {
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
  View_I26_1072_17_1228: {
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
  View_I26_1072_17_1228_17_1192: {
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
  View_I26_1072_17_1228_17_1193: {
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
  View_I26_1072_17_1228_17_1194: {
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
  View_I26_1072_17_1228_17_1195: {
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
  ImageBackground_I26_1072_17_1228_17_1196: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_I26_1072_17_1228_17_1197: {
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
  View_I26_1072_17_1228_17_1198: {
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
  ImageBackground_I26_1072_17_1228_17_1199: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_I26_1072_17_1228_17_1200: {
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
  View_I26_1072_17_1228_17_1201: {
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
  ImageBackground_I26_1072_17_1228_17_1202: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_I26_1072_17_1228_17_1203: {
    flexGrow: 1,
    width: wp("36%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I26_1072_17_1228_17_1204: {
    flexGrow: 1,
    width: wp("36%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I26_1072_17_1228_17_1204: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.030000001192092896,
    textTransform: "none"
  },
  View_I26_1072_17_1228_17_1206: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%")
  },
  View_I26_1072_17_1228_17_1207: {
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
  ImageBackground_I26_1072_17_1228_17_1209: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_31_1358: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("91%"),
    minHeight: hp("91%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("13%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I31_1358_31_1267: {
    flexGrow: 1,
    width: wp("44%"),
    height: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("32%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I31_1358_31_1267_31_1145: {
    flexGrow: 1,
    width: wp("44%"),
    height: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_I31_1358_31_1267_31_1146: {
    flexGrow: 1,
    width: wp("27%"),
    height: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("2%")
  },
  ImageBackground_I31_1358_31_1267_31_1147: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("14%")
  },
  ImageBackground_I31_1358_31_1267_31_1148: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("26%")
  },
  View_I31_1358_31_1267_31_1150: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("26%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I31_1358_31_1267_31_1151: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_I31_1358_31_1267_31_1156: {
    flexGrow: 1,
    width: wp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("20%"),
    justifyContent: "flex-start"
  },
  Text_I31_1358_31_1267_31_1156: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I31_1358_31_1267_31_1157: {
    flexGrow: 1,
    width: wp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("17%"),
    justifyContent: "flex-start"
  },
  Text_I31_1358_31_1267_31_1157: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I31_1358_31_1267_31_1158: {
    flexGrow: 1,
    width: wp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("23%"),
    justifyContent: "flex-start"
  },
  Text_I31_1358_31_1267_31_1158: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I31_1358_31_1268: {
    flexGrow: 1,
    width: wp("44%"),
    height: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I31_1358_31_1268_31_1145: {
    flexGrow: 1,
    width: wp("44%"),
    height: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_I31_1358_31_1268_31_1146: {
    flexGrow: 1,
    width: wp("27%"),
    height: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("2%")
  },
  ImageBackground_I31_1358_31_1268_31_1147: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("14%")
  },
  ImageBackground_I31_1358_31_1268_31_1148: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("26%")
  },
  View_I31_1358_31_1268_31_1150: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("26%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I31_1358_31_1268_31_1151: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_I31_1358_31_1268_31_1156: {
    flexGrow: 1,
    width: wp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("20%"),
    justifyContent: "flex-start"
  },
  Text_I31_1358_31_1268_31_1156: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I31_1358_31_1268_31_1157: {
    flexGrow: 1,
    width: wp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("17%"),
    justifyContent: "flex-start"
  },
  Text_I31_1358_31_1268_31_1157: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I31_1358_31_1268_31_1158: {
    flexGrow: 1,
    width: wp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("23%"),
    justifyContent: "flex-start"
  },
  Text_I31_1358_31_1268_31_1158: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I31_1358_31_1269: {
    flexGrow: 1,
    width: wp("44%"),
    height: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I31_1358_31_1269_31_1145: {
    flexGrow: 1,
    width: wp("44%"),
    height: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_I31_1358_31_1269_31_1146: {
    flexGrow: 1,
    width: wp("27%"),
    height: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("2%")
  },
  ImageBackground_I31_1358_31_1269_31_1147: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("14%")
  },
  ImageBackground_I31_1358_31_1269_31_1148: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("26%")
  },
  View_I31_1358_31_1269_31_1150: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("26%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I31_1358_31_1269_31_1151: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_I31_1358_31_1269_31_1156: {
    flexGrow: 1,
    width: wp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("20%"),
    justifyContent: "flex-start"
  },
  Text_I31_1358_31_1269_31_1156: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I31_1358_31_1269_31_1157: {
    flexGrow: 1,
    width: wp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("17%"),
    justifyContent: "flex-start"
  },
  Text_I31_1358_31_1269_31_1157: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I31_1358_31_1269_31_1158: {
    flexGrow: 1,
    width: wp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("23%"),
    justifyContent: "flex-start"
  },
  Text_I31_1358_31_1269_31_1158: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I31_1358_31_1270: {
    flexGrow: 1,
    width: wp("44%"),
    height: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("32%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I31_1358_31_1270_31_1145: {
    flexGrow: 1,
    width: wp("44%"),
    height: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_I31_1358_31_1270_31_1146: {
    flexGrow: 1,
    width: wp("27%"),
    height: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("2%")
  },
  ImageBackground_I31_1358_31_1270_31_1147: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("14%")
  },
  ImageBackground_I31_1358_31_1270_31_1148: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("26%")
  },
  View_I31_1358_31_1270_31_1150: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("26%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I31_1358_31_1270_31_1151: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_I31_1358_31_1270_31_1156: {
    flexGrow: 1,
    width: wp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("20%"),
    justifyContent: "flex-start"
  },
  Text_I31_1358_31_1270_31_1156: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I31_1358_31_1270_31_1157: {
    flexGrow: 1,
    width: wp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("17%"),
    justifyContent: "flex-start"
  },
  Text_I31_1358_31_1270_31_1157: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I31_1358_31_1270_31_1158: {
    flexGrow: 1,
    width: wp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("23%"),
    justifyContent: "flex-start"
  },
  Text_I31_1358_31_1270_31_1158: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I31_1358_31_1271: {
    flexGrow: 1,
    width: wp("44%"),
    height: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("64%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I31_1358_31_1271_31_1145: {
    flexGrow: 1,
    width: wp("44%"),
    height: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_I31_1358_31_1271_31_1146: {
    flexGrow: 1,
    width: wp("27%"),
    height: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("2%")
  },
  ImageBackground_I31_1358_31_1271_31_1147: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("14%")
  },
  ImageBackground_I31_1358_31_1271_31_1148: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("26%")
  },
  View_I31_1358_31_1271_31_1150: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("26%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I31_1358_31_1271_31_1151: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_I31_1358_31_1271_31_1156: {
    flexGrow: 1,
    width: wp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("20%"),
    justifyContent: "flex-start"
  },
  Text_I31_1358_31_1271_31_1156: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I31_1358_31_1271_31_1157: {
    flexGrow: 1,
    width: wp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("17%"),
    justifyContent: "flex-start"
  },
  Text_I31_1358_31_1271_31_1157: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I31_1358_31_1271_31_1158: {
    flexGrow: 1,
    width: wp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("23%"),
    justifyContent: "flex-start"
  },
  Text_I31_1358_31_1271_31_1158: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I31_1358_31_1272: {
    flexGrow: 1,
    width: wp("44%"),
    height: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("64%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I31_1358_31_1272_31_1145: {
    flexGrow: 1,
    width: wp("44%"),
    height: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_I31_1358_31_1272_31_1146: {
    flexGrow: 1,
    width: wp("27%"),
    height: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("2%")
  },
  ImageBackground_I31_1358_31_1272_31_1147: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("14%")
  },
  ImageBackground_I31_1358_31_1272_31_1148: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("26%")
  },
  View_I31_1358_31_1272_31_1150: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("26%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I31_1358_31_1272_31_1151: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_I31_1358_31_1272_31_1156: {
    flexGrow: 1,
    width: wp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("20%"),
    justifyContent: "flex-start"
  },
  Text_I31_1358_31_1272_31_1156: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I31_1358_31_1272_31_1157: {
    flexGrow: 1,
    width: wp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("17%"),
    justifyContent: "flex-start"
  },
  Text_I31_1358_31_1272_31_1157: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I31_1358_31_1272_31_1158: {
    flexGrow: 1,
    width: wp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("23%"),
    justifyContent: "flex-start"
  },
  Text_I31_1358_31_1272_31_1158: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
