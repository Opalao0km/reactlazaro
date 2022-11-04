import { IMessageData } from "interfaces/message.interface";
import api from "services/api";

class MessageData {
  index() {
    return api.get<IMessageData[]>('/dados')
  }
  store(data: IMessageData) {
    return api.post(`/dados`, data)
  }
  show(id: number) {
    return api.get<IMessageData>(`/dados/${id}`)
  }
  update(id: number, data: IMessageData) {
    return api.put(`/dados/${id}`, data)
  }
  destroy(id: number) {
    return api.delete(`/dados/${id}`)
  }
}

export default new MessageData()