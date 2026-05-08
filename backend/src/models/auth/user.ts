import { UserProps } from '@shared/types/auth/user.type'

type UserRequiredProps = UserProps & {
  roles: string[]
  isBanned: boolean
  createdAt: Date
  updatedAt: Date
}

export class User {
  private props: UserRequiredProps

  constructor(props: UserProps) {
    this.props = {
      ...props,
      isBanned: props.isBanned ?? false,
      createdAt: props.createdAt ?? new Date(),
      updatedAt: props.updatedAt ?? new Date(),
      roles: props.roles ?? []
    }
  }

  get id() {
    return this.props.id
  }

  get fullName() {
    return this.props.fullName
  }

  get userName() {
    return this.props.userName
  }

  get email() {
    return this.props.email
  }

  get isBanned() {
    return this.props.isBanned
  }

  get createdAt() {
    return this.props.createdAt
  }

  get updatedAt() {
    return this.props.updatedAt
  }

  get roles() {
    return this.props.roles
  }

  get password() {
    return this.props.password
  }

  updateProfile(fullName: string) {
    if (!fullName.trim()) {
      throw new Error('Full name cannot be empty')
    }
    this.props.fullName = fullName
    this.touch()
  }

  changefullName(fullName: string) {
    if (fullName.length < 4) {
      throw new Error('Username must be at least 4 characters')
    }
    this.props.fullName = fullName
    this.touch()
  }

  changeEmail(email: string) {
    if (!email.includes('@')) {
      throw new Error('Invalid email')
    }
    this.props.email = email
    this.touch()
  }

  changePassword(newPassword: string) {
    if (newPassword.length < 6) {
      throw new Error('Password too short')
    }
    this.props.password = newPassword
    this.touch()
  }

  ban() {
    this.props.isBanned = true
    this.touch()
  }

  unban() {
    this.props.isBanned = false
    this.touch()
  }

  assignRole(role: string) {
    if (!this.props.roles.includes(role)) {
      this.props.roles.push(role)
      this.touch()
    }
  }

  removeRole(role: string) {
    this.props.roles = this.props.roles.filter((r) => r !== role)
    this.touch()
  }

  setId(id: number) {
    if (this.props.id) {
      throw new Error('ID already set')
    }
    this.props.id = id
  }

  private touch() {
    this.props.updatedAt = new Date()
  }

  toJson() {
    const { password, ...rest } = this.props
    return rest
  }
}
