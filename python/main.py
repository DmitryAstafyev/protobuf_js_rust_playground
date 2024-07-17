import sys
import os

sys.path.append(os.path.join(os.path.dirname(__file__), 'src'))

import event_pb2

def main():
    message = event_pb2.CallbackEvent()
    bin_data_rs = bytes([50,26,10,0,10,22,8,1,18,18,9,0,0,0,0,0,0,240,63,17,0,0,0,0,0,0,89,64])
    try:
        message.ParseFromString(bin_data_rs)
        print("Parsed message (RS data):", message)
    except Exception as e:
        print("Failed to parse message:", e)

    message2 = event_pb2.CallbackEvent()
    bin_data_js = bytes([50,30,10,4,8,0,18,0,10,22,8,1,18,18,9,0,0,0,0,0,0,240,63,17,0,0,0,0,0,0,89,64])
    try:
        message2.ParseFromString(bin_data_js)
        print("Parsed message (JS data):", message2)
    except Exception as e:
        print("Failed to parse message:", e)

    print("Bytes from PY(1):", list(message.SerializeToString()))
    print("Bytes from PY(2):", list(message2.SerializeToString()))
    
if __name__ == "__main__":
    main()
