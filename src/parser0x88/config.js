Board0x88Config = {
    squares:[
        'a1', 'b1', 'c1', 'd1', 'e1', 'f1', 'g1', 'h1',
        'a2', 'b2', 'c2', 'd2', 'e2', 'f2', 'g2', 'h2',
        'a3', 'b3', 'c3', 'd3', 'e3', 'f3', 'g3', 'h3',
        'a4', 'b4', 'c4', 'd4', 'e4', 'f4', 'g4', 'h4',
        'a5', 'b5', 'c5', 'd5', 'e5', 'f5', 'g5', 'h5',
        'a6', 'b6', 'c6', 'd6', 'e6', 'f6', 'g6', 'h6',
        'a7', 'b7', 'c7', 'd7', 'e7', 'f7', 'g7', 'h7',
        'a8', 'b8', 'c8', 'd8', 'e8', 'f8', 'g8', 'h8'
    ],

    fenSquares:[
        'a8', 'b8', 'c8', 'd8', 'e8', 'f8', 'g8', 'h8',
        'a7', 'b7', 'c7', 'd7', 'e7', 'f7', 'g7', 'h7',
        'a6', 'b6', 'c6', 'd6', 'e6', 'f6', 'g6', 'h6',
        'a5', 'b5', 'c5', 'd5', 'e5', 'f5', 'g5', 'h5',
        'a4', 'b4', 'c4', 'd4', 'e4', 'f4', 'g4', 'h4',
        'a3', 'b3', 'c3', 'd3', 'e3', 'f3', 'g3', 'h3',
        'a2', 'b2', 'c2', 'd2', 'e2', 'f2', 'g2', 'h2',
        'a1', 'b1', 'c1', 'd1', 'e1', 'f1', 'g1', 'h1'
    ],

    fenSquaresNumeric:[
        112, 113, 114, 115, 116, 117, 118, 119,
        96, 97, 98, 99, 100, 101, 102, 103,
        80, 81, 82, 83, 84, 85, 86, 87,
        64, 65, 66, 67, 68, 69, 70, 71,
        48, 49, 50, 51, 52, 53, 54, 55,
        32, 33, 34, 35, 36, 37, 38, 39,
        16, 17, 18, 19, 20, 21, 22, 23,
        0, 1, 2, 3, 4, 5, 6, 7
    ],

    fenNotations:{
        white:{
            'pawn':'P',
            'knight':'N',
            'bishop':'B',
            'rook':'R',
            'queen':'Q',
            'king':'K'
        },
        black:{
            'pawn':'p',
            'knight':'n',
            'bishop':'b',
            'rook':'r',
            'queen':'q',
            'king':'k'
        }
    },

    fen:'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',

    fenPieces:{
        'p':'blackPawns', 'b':'blackBishops', 'n':'blackKnights', 'r':'blackRooks', 'q':'blackQueens', 'k':'blackKing',
        'P':'whitePawns', 'B':'whiteBishops', 'N':'whiteKnights', 'R':'whiteRooks', 'Q':'whiteQueens', 'K':'whiteKing'
    },

    colorAbbreviations:{ 'w':'white', 'b':'black' },
    oppositeColors:{ 'white':'black', 'black':'white'},
    mapping:{
        'a1':0, 'b1':1, 'c1':2, 'd1':3, 'e1':4, 'f1':5, 'g1':6, 'h1':7,
        'a2':16, 'b2':17, 'c2':18, 'd2':19, 'e2':20, 'f2':21, 'g2':22, 'h2':23,
        'a3':32, 'b3':33, 'c3':34, 'd3':35, 'e3':36, 'f3':37, 'g3':38, 'h3':39,
        'a4':48, 'b4':49, 'c4':50, 'd4':51, 'e4':52, 'f4':53, 'g4':54, 'h4':55,
        'a5':64, 'b5':65, 'c5':66, 'd5':67, 'e5':68, 'f5':69, 'g5':70, 'h5':71,
        'a6':80, 'b6':81, 'c6':82, 'd6':83, 'e6':84, 'f6':85, 'g6':86, 'h6':87,
        'a7':96, 'b7':97, 'c7':98, 'd7':99, 'e7':100, 'f7':101, 'g7':102, 'h7':103,
        'a8':112, 'b8':113, 'c8':114, 'd8':115, 'e8':116, 'f8':117, 'g8':118, 'h8':119
    },

    numberToSquareMapping:{
        '0':'a1', '1':'b1', '2':'c1', '3':'d1', '4':'e1', '5':'f1', '6':'g1', '7':'h1',
        '16':'a2', '17':'b2', '18':'c2', '19':'d2', '20':'e2', '21':'f2', '22':'g2', '23':'h2',
        '32':'a3', '33':'b3', '34':'c3', '35':'d3', '36':'e3', '37':'f3', '38':'g3', '39':'h3',
        '48':'a4', '49':'b4', '50':'c4', '51':'d4', '52':'e4', '53':'f4', '54':'g4', '55':'h4',
        '64':'a5', '65':'b5', '66':'c5', '67':'d5', '68':'e5', '69':'f5', '70':'g5', '71':'h5',
        '80':'a6', '81':'b6', '82':'c6', '83':'d6', '84':'e6', '85':'f6', '86':'g6', '87':'h6',
        '96':'a7', '97':'b7', '98':'c7', '99':'d7', '100':'e7', '101':'f7', '102':'g7', '103':'h7',
        '112':'a8', '113':'b8', '114':'c8', '115':'d8', '116':'e8', '117':'f8', '118':'g8', '119':'h8'
    },

    numericMapping:{
        '0':0, '1':1, '2':2, '3':3, '4':4, '5':5, '6':6, '7':7,
        '8':16, '9':17, '10':18, '11':19, '12':20, '13':21, '14':22, '15':23,
        '16':32, '17':33, '18':34, '19':35, '20':36, '21':37, '22':38, '23':39,
        '24':48, '25':49, '26':50, '27':51, '28':52, '29':53, '30':54, '31':55,
        '32':64, '33':65, '34':66, '35':67, '36':68, '37':69, '38':70, '39':71,
        '40':80, '41':81, '42':82, '43':83, '44':84, '45':85, '46':86, '47':87,
        '48':96, '49':97, '50':98, '51':99, '52':100, '53':101, '54':102, '55':103,
        '56':112, '57':113, '58':114, '59':115, '60':116, '61':117, '62':118, '63':119
    },
    pieces:{
        'P':0x01,
        'N':0x02,
        'K':0x03,
        'B':0x05,
        'R':0x06,
        'Q':0x07,
        'p':0x09,
        'n':0x0A,
        'k':0x0B,
        'b':0x0D,
        'r':0x0E,
        'q':0x0F
    },
    pieceMapping:{
        0x01:'P',
        0x02:'N',
        0x03:'K',
        0x05:'B',
        0x06:'R',
        0x07:'Q',
        0x09:'p',
        0x0A:'n',
        0x0B:'k',
        0x0D:'b',
        0x0E:'r',
        0x0F:'q'
    },

    pieceValues:{
        0x01:1,
        0x02:3,
        0x03:100,
        0x05:3,
        0x06:5,
        0x07:9,
        0x09:1,
        0x0A:3,
        0x0B:100,
        0x0D:3,
        0x0E:5,
        0x0F:9
    },

    pieceAbbr:{
        'Q':'queen',
        'R':'rook',
        'N':'knight',
        'B':'bishop'
    },
    typeMapping:{
        0x01:'pawn',
        0x02:'knight',
        0x03:'king',
        0x05:'bishop',
        0x06:'rook',
        0x07:'queen',
        0x09:'pawn',
        0x0A:'knight',
        0x0B:'king',
        0x0D:'bishop',
        0x0E:'rook',
        0x0F:'queen'
    },

    notationMapping:{
        0x01:'',
        0x02:'N',
        0x03:'K',
        0x05:'B',
        0x06:'R',
        0x07:'Q',
        0x09:'',
        0x0A:'N',
        0x0B:'K',
        0x0D:'B',
        0x0E:'R',
        0x0F:'Q'
    },
    numberToColorMapping:{
        0x01:'white',
        0x02:'white',
        0x03:'white',
        0x05:'white',
        0x06:'white',
        0x07:'white',
        0x09:'black',
        0x0A:'black',
        0x0B:'black',
        0x0D:'black',
        0x0E:'black',
        0x0F:'black'
    },

    typeToNumberMapping:{
        'pawn':0x01,
        'knight':0x02,
        'king':0x03,
        'bishop':0x05,
        'rook':0x06,
        'queen':0x07
    },

    colorMapping:{
        'p':'black', 'n':'black', 'b':'black', 'r':'black', 'q':'black', 'k':'black',
        'P':'white', 'N':'white', 'B':'white', 'R':'white', 'Q':'white', 'K':'white'
    },

    castle:{
        '-':0,
        'K':8,
        'Q':4,
        'k':2,
        'q':1
    },

    castleMapping:{
        0:'-',
        1:'q',
        2:'k',
        3:'kq',
        4:'Q',
        5:'Qq',
        6:'Qk',
        7:'Qkq',
        8:'K',
        9:'Kq',
        10:'Kk',
        11:'Kkq',
        12:'KQ',
        13:'KQq',
        14:'KQk',
        15:'KQkq'
    },
    
    castleToNumberMapping:{
        '-':0,
        'q':1,
        'k':2,
        'kq':3,
        'Q':4,
        'Qq':5,
        'Qk':6,
        'Qkq':7,
        'K':8,
        'Kq':9,
        'Kk':10,
        'Kkq':11,
        'KQ':12,
        'KQq':13,
        'KQk':14,
        'KQkq':15       
        
    },

    numbers:{
        '0':1, '1':1, '2':1, '3':1, '4':1, '5':1, '6':1, '7':1, '8':1, '9':0
    },
    movePatterns:{
        0X01:[16, 32, 15, 17],
        0X09:[-16, -32, -15, -17],
        0x05:[-15, -17, 15, 17],
        0x0D:[-15, -17, 15, 17],
        0x06:[-1, 1, -16, 16],
        0x0E:[-1, 1, -16, 16],
        0x07:[-15, -17, 15, 17, -1, 1, -16, 16],
        0x0F:[-15, -17, 15, 17, -1, 1, -16, 16],
        0X02:[-33, -31, -18, -14, 14, 18, 31, 33],
        0x0A:[-33, -31, -18, -14, 14, 18, 31, 33],
        0X03:[-17, -16, -15, -1, 1, 15, 16, 17],
        0X0B:[-17, -16, -15, -1, 1, 15, 16, 17]
    },

    distances:{'241':1, '242':2, '243':3, '244':4, '245':5, '246':6, '247':7, '272':1,
        '273':1, '274':2, '275':3, '276':4, '277':5, '278':6, '279':7, '304':2, '305':2,
        '306':2, '307':3, '308':4, '309':5, '310':6, '311':7, '336':3, '337':3, '338':3,
        '339':3, '340':4, '341':5, '342':6, '343':7, '368':4, '369':4, '370':4, '371':4,
        '372':4, '373':5, '374':6, '375':7, '400':5, '401':5, '402':5, '403':5, '404':5,
        '405':5, '406':6, '407':7, '432':6, '433':6, '434':6, '435':6, '436':6, '437':6,
        '438':6, '439':7, '464':7, '465':7, '466':7, '467':7, '468':7, '469':7, '470':7,
        '471':7, '239':1, '271':1, '303':2, '335':3, '367':4, '399':5, '431':6, '463':7,
        '238':2, '270':2, '302':2, '334':3, '366':4, '398':5, '430':6, '462':7, '237':3,
        '269':3, '301':3, '333':3, '365':4, '397':5, '429':6, '461':7, '236':4, '268':4,
        '300':4, '332':4, '364':4, '396':5, '428':6, '460':7, '235':5, '267':5, '299':5,
        '331':5, '363':5, '395':5, '427':6, '459':7, '234':6, '266':6, '298':6, '330':6,
        '362':6, '394':6, '426':6, '458':7, '233':7, '265':7, '297':7, '329':7, '361':7,
        '393':7, '425':7, '457':7, '208':1, '209':1, '210':2, '211':3, '212':4, '213':5,
        '214':6, '215':7, '207':1, '206':2, '205':3, '204':4, '203':5, '202':6, '201':7,
        '176':2, '177':2, '178':2, '179':3, '180':4, '181':5, '182':6, '183':7, '175':2,
        '174':2, '173':3, '172':4, '171':5, '170':6, '169':7, '144':3, '145':3, '146':3,
        '147':3, '148':4, '149':5, '150':6, '151':7, '143':3, '142':3, '141':3, '140':4,
        '139':5, '138':6, '137':7, '112':4, '113':4, '114':4, '115':4, '116':4, '117':5,
        '118':6, '119':7, '111':4, '110':4, '109':4, '108':4, '107':5, '106':6, '105':7,
        '80':5, '81':5, '82':5, '83':5, '84':5, '85':5, '86':6, '87':7, '79':5, '78':5,
        '77':5, '76':5, '75':5, '74':6, '73':7, '48':6, '49':6, '50':6, '51':6, '52':6,
        '53':6, '54':6, '55':7, '47':6, '46':6, '45':6, '44':6, '43':6, '42':6, '41':7,
        '16':7, '17':7, '18':7, '19':7, '20':7, '21':7, '22':7, '23':7, '15':7, '14':7,
        '13':7, '12':7, '11':7, '10':7, '9':7
    },

    fileMapping:['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'],
    rankMapping:{ 0:1, 16:2, 32:3, 48:4, 64:5, 80:6, 96:7, 112:8},
    files:{ 'a':0, 'b':1, 'c':2, 'd':3, 'e':4, 'f':5, 'g':6, 'h':7}
};